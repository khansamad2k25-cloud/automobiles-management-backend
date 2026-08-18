const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully Connected");
    } catch (error) {
        console.error("MongoDB Failed to connect");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
