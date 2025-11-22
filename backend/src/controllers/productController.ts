import { Request, Response } from "express";
import { fetchProducts, fetchProductById } from "../services/productService";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category, minPrice, maxPrice, tag, search } = req.query;

    const where: any = {};

    if (category && category !== "All") where.category = String(category);

    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = Number(minPrice);
      if (maxPrice) where.price.lte = Number(maxPrice);
    }

    if (search) {
      where.title = { contains: String(search), mode: "insensitive" };
    }

    if (tag) {
      where.tags = { some: { name: String(tag) } };
    }

    const products = await fetchProducts(where);

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await fetchProductById(Number(req.params.id));

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch {
    res.status(500).json({ message: "Failed to fetch product" });
  }
};
