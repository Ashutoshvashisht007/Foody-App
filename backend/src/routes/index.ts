import { Router } from "express";
import productRoutes from "./productRoute";
import orderRoutes from "./orderRoute";

const router = Router();

router.use("/products", productRoutes);
router.use("/orders", orderRoutes);

export default router;
