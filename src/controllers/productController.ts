import { Request, Response, NextFunction } from "express";
import db from "../models";


export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('yha');
        const data: Object = await db.Products.findAll({});
        return res.status(200).json({ message: "All products", data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occurred while retrieving tutorials."
        });
    }
};


export const createProducts = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
        return res.status(400).json({ message: "title description price required" });
    }

    try {
        let payload = { name, description, price };
        console.log(payload);

        const data = await db.Products.create(payload);
        if (data) {
            return res.status(200).json({ message: "product created", data });
        }
        return res.status(400).json({ message: "unable to create product" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occurred while retrieving tutorials."
        });
    }
};


export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {

        const data = await db.Products.findByPk(id);
        if (data) {
            return res.status(200).json({ message: "product details", data });
        }
        return res.status(404).json({ message: "product not found" });
    } catch (error) {
        return res.status(500).json({
            message: "Some error occurred while retrieving tutorials."
        });
    }
};


export const updateProductById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const num = await db.Products.update(req.body, {
            where: { id: id }
        });
        if (num[0] === 1) {
            return res.status(200).json({ message: "product updated successfully" });
        }
        return res.status(404).json({ message: "product not found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occurred while retrieving tutorials."
        });
    }
};

export const deleteProductById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const num = await db.Products.destroy({
            where: { id: id }
        });
        if (num == 1) {
            return res.status(200).json({ message: "product deleted successfully" });
        }
        return res.status(404).json({ message: "product not found" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occurred while retrieving tutorials."
        });
    }
};
