import express from "express";

import { sql } from "../database";
const getOrdersRouter = express.Router();

getOrdersRouter.get("/", async (request, response) => {
  const { CustomerId, ProductId, quantity } = request.body;

  try {
    await sql`INSERT INTO orders (productid, customerid, quantity)
                VALUES (${CustomerId}, ${ProductId}, ${quantity})`;

    response.status(200).json({ getOrder: request.body });
  } catch (error) {
    response.status(400).json({ message: error });
  }
});

module.exports = getOrdersRouter;
