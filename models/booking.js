const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true, trim: true },
    carModel: { type: String, required: true, trim: true },
    bookingDate: { type: Date, required: true },
    pickupDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    price: { type: Number, required: true, min: 1 },
    status: {
        type: String, required: true,
        enum: ["Pending", "Confirmed", "Completed", "Cancelled"]
    },
    paymentStatus: { type: String, required: true, enum: ["Pending", "Paid"] }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
