import express from "express";
import { createProducts, deleteProductById, getAllProducts, getProductById, updateProductById } from "../controllers/productController";

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById)
router.delete('/:id', deleteProductById)

export { router as ProductRoutes };
