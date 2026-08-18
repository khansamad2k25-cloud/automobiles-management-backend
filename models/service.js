const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    serviceName: { type: String, required: true, trim: true },
    carModel: { type: String, required: true, trim: true },
    serviceType: {
        type: String, required: true,
        enum: ["Oil Change", "Repair", "Washing", "General Service"]
    },
    serviceDate: { type: Date, required: true },
    cost: { type: Number, required: true, min: 1 },
    mechanicName: { type: String, required: true, trim: true },
    status: { type: String, required: true, enum: ["Pending", "Completed"] },
    paymentStatus: { type: String, required: true, enum: ["Pending", "Paid"] }
}, { timestamps: true });

module.exports = mongoose.model("Service", serviceSchema);
