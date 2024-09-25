import express from "express";

import { sql } from "../database";
const customersRouter = express.Router();

customersRouter.get("/", async (_request, response) => {
  const customers = await sql`SELECT * FROM customers`;

  response.status(200).json({
    data: customers,
  });
});

customersRouter.post("/", async (request, response) => {
  const { FirstName, LastName, email, address } = request.body;

  try {
    await sql`INSERT INTO customers (FirstName, LastName, email, address)
            VALUES (${FirstName}, ${LastName}, ${email}, ${address})`;

    response.status(200).json({ customer: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

module.exports = customersRouter;
