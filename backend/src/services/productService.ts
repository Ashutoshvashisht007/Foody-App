import prisma from "../config/prisma";

export const fetchProducts = (filters: any) => {
  return prisma.product.findMany({
    where: filters,
    include: { tags: true }
  });
};

export const fetchProductById = (id: number) => {
  return prisma.product.findUnique({
    where: { id },
    include: { tags: true }
  });
};
