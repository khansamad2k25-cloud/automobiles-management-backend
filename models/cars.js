const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true, min: 1900 },
    color: { type: String, required: true, trim: true },
    fuel: {
        type: String, required: true,
        enum: ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"]
    },
    transmission: {
        type: String, required: true,
        enum: ["Manual", "Automatic"]
    },
    price: { type: Number, required: true, min: 1 },
    mileage: { type: Number, min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 }
}, { timestamps: true });

module.exports = mongoose.model("Car", carSchema);
