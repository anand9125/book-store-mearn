const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT||3000;


// middleware
app.use(express.json());
app.use(cors())
require('dotenv').config()
// routes
const bookRoutes=require("./src/books/book.route")
const orderRoutes=require("./src/orders/order.route")
const userRoutes=require("./src/users/user.routes")
const adminRoutes=require("./src/stats/admin.status")

app.use("/api/books", bookRoutes)
app.use("/api/order", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
