const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    phone: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18 },
    city: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    status: { type: String, required: true, enum: ["Active", "Inactive"], default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);
