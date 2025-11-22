import { Request, Response } from "express";
import { createNewOrder } from "../services/orderService";
import { sendOrderConfirmation } from "../services/emailService";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { customerName, customerEmail, address, items } = req.body;

    const order = await createNewOrder(
      customerName,
      customerEmail,
      address,
      items
    );

    // Fire and forget
    sendOrderConfirmation({
      id: order.id,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      totalAmount: Number(order.totalAmount),
      items: order.items.map((i) => ({
        title: i.product.title,
        quantity: i.quantity,
        price: Number(i.price)
      }))
    });

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Order creation failed" });
  }
};
