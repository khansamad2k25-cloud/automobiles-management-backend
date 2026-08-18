const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true, trim: true, minlength: 2, maxlength: 50
    },
    email: {
        type: String, required: true, trim: true, lowercase: true, unique: true
    },
    age: {
        type: Number, required: true, min: 18, max: 100
    },
    password: {
        type: String, required: true, minlength: 5, maxlength: 50
    },
    phone: {
        type: String, required: true, trim: true, minlength: 10, maxlength: 10
    },
    city: {
        type: String, required: true, trim: true, minlength: 2, maxlength: 30
    },
    gender: {
        type: String, required: true, enum: ["Male", "Female", "Other"]
    },
    role: {
        type: String, required: true, enum: ["User", "Admin"], default: "User"
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
