import express, { Application } from "express";
import { ProductRoutes } from "../routes";

export default async (app: Application) => {
    app.use(express.json());

    app.use("/products", ProductRoutes);

    return app;
};
