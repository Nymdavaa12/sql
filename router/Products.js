import express from "express";

import { sql } from "../database";
const ProductsRouter = express.Router();

ProductsRouter.get("/", async (_request, response) => {
  const Products = await sql`SELECT * FROM Products`;

  response.status(200).json({
    data: Products,
  });
});

ProductsRouter.post("/", async (request, response) => {
  const { ProductName, Price } = request.body;

  try {
    await sql`INSERT INTO products (productname, price)
            VALUES (${ProductName}, ${Price})`;

    response.status(200).json({ Products: request.body });
  } catch (error) {
    response.status(400).json({ message: error });
  }
});

module.exports = ProductsRouter;
