const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");


mongoose
    .connect(
        process.env.MONGODB_URI
    )
    .then(() => console.log("DB connection success"))
    .catch((error) => {
        console.log(error);
    })

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Side is running");
});