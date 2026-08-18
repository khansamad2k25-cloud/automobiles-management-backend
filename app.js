const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");
const customerRoutes = require("./routes/customerRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Automobile Management System"
    });
});

app.use("/auth", authRoutes);
app.use("/cars", carRoutes);
app.use("/customers", customerRoutes);
app.use("/bookings", bookingRoutes);
app.use("/services", serviceRoutes);

app.use(errorMiddleware);

module.exports = app;
