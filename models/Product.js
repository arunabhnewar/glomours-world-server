const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        summary: { type: String, required: true },
        details: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        rating: { type: Number, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema);