import { Prisma } from "@prisma/client";
import prisma from "../config/prisma";

interface OrderItemInput {
  productId: number;
  quantity: number;
}

interface OrderItemsData {
    productId: number;
    quantity: number;
    price: Prisma.Decimal;
}

export const createNewOrder = async (
  customerName: string,
  customerEmail: string,
  address: string,
  items: OrderItemInput[]
) => {
  let totalAmount = 0;
  const orderItems: OrderItemsData[] = [];

  for (const item of items) {
    const product = await prisma.product.findUnique({
      where: { id: item.productId }
    });

    if (!product) throw new Error("Product not found");

    const price = Number(product.price);
    totalAmount += price * item.quantity;

    orderItems.push({
      productId: item.productId,
      quantity: item.quantity,
      price: product.price
    });
  }

  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const order = await tx.order.create({
      data: {
        customerName,
        customerEmail,
        address,
        totalAmount,
        items: {
          create: orderItems
        }
      },
      include: {
        items: { include: { product: true } }
      }
    });

    return order;
  });
};
