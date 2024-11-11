const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = 3000;


// middleware
app.use(express.json());
app.use(cors({
    
    credentials: true
}))

// routes
const bookRoutes=require("./src/books/book.route")
const orderRoutes=require("./src/orders/order.route")
const adminRoutes=require("./src/users/user.routes")

app.use("/api/books", bookRoutes)
app.use("/api/order", orderRoutes)
app.use("/api/auth", adminRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
