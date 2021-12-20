const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");


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

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Side is running");
});