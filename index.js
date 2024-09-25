const express = require("express");
// const aRouter = require("./router/summer");
const customersRouter = require("./router/customers");
const ProductsRouter = require("./router/Products");
const OrdersRouter = require("./router/Orders");
const getOrdersRouter = require("./all.in/getOrder");

const app = express();

app.use(express.json());

const port = 8080;

app.use("/customers", customersRouter);
app.use("/Products", ProductsRouter);
app.use("/Orders", OrdersRouter);
app.use("/getOrder", getOrdersRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
