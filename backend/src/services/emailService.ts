import nodemailer from 'nodemailer';

// 1. Setup Transporter
// For development, use Ethereal Email (https://ethereal.email/) to test without real creds
// For production, use Gmail, SendGrid, or AWS SES
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER || 'test_user',
        pass: process.env.SMTP_PASS || 'test_pass',
    },
});

interface OrderDetails {
    id: number;
    customerName: string;
    customerEmail: string;
    totalAmount: number;
    items: Array<{ title: string; quantity: number; price: number }>;
}

export const sendOrderConfirmation = async (order: OrderDetails) => {
    try {
        const itemsHtml = order.items.map(item => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.title}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.quantity}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">$${item.price}</td>
      </tr>
    `).join('');

        const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1 style="color: #2BBF6D;">Thank you for your order, ${order.customerName}!</h1>
        <p>Your order <strong>#${order.id}</strong> has been placed successfully.</p>
        
        <h3>Order Summary</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f9f9f9; text-align: left;">
              <th style="padding: 8px;">Product</th>
              <th style="padding: 8px;">Qty</th>
              <th style="padding: 8px;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
        
        <h3 style="text-align: right; margin-top: 20px;">Total: $${order.totalAmount}</h3>
        <p>We will notify you when your items are shipped.</p>
      </div>
    `;

        // 3. Send Mail
        const info = await transporter.sendMail({
            from: '"Foodzy Shop" <no-reply@foodzy.com>',
            to: order.customerEmail,
            subject: `Order Confirmation #${order.id}`,
            html: htmlContent,
        });

        console.log("Message sent: %s", info.messageId);
        // If using Ethereal, this URL lets you view the email in browser
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } catch (error) {
        console.error("Error sending email:", error);
    }
};