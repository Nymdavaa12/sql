import express from "express";

import { sql } from "../database";
const OrdersRouter = express.Router();

OrdersRouter.get("/", async (_request, response) => {
  const orders =
    await sql`SELECT orders.orderId, customers.firstname, products.productname, products.price;`;

  response.status(200).json({
    data: orders,
  });
});

OrdersRouter.get("/", async (request, response) => {
  const { CustomerId, ProductId, quantity } = request.body;

  try {
    await sql`INSERT INTO orders (productid, customerid, quantity)
              VALUES (${CustomerId}, ${ProductId}, ${quantity})`;

    response.status(200).json({ Orders: request.body });
  } catch (error) {
    response.status(400).json({ message: "error !!!!" });
  }
});

OrdersRouter.post("/", async (request, response) => {
  const { CustomerId, ProductId, quantity } = request.body;

  try {
    await sql`INSERT INTO orders (productid, customerid, quantity)
            VALUES (${CustomerId}, ${ProductId}, ${quantity})`;

    response.status(200).json({ Orders: request.body });
  } catch (error) {
    response.status(400).json({ message: "error !!!!" });
  }
});

module.exports = OrdersRouter;
