const mongoose = require("mongoose");
const Booking = require("../models/booking");
const AppError = require("../utils/AppError");

const checkId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new AppError("Invalid Booking ID", 400);
};
const getAllBookings = async () => {
    const data = await Booking.find();
    if (!data.length) throw new AppError("No Bookings Found", 404);
    return data;
};
const getSingleBooking = async (id) => {
    checkId(id);
    const data = await Booking.findById(id);
    if (!data) throw new AppError("Booking Not Found", 404);
    return data;
};
const addBooking = async (body) => {
    const { customerName, carModel, bookingDate, pickupDate, returnDate, price, status, paymentStatus } = body;
    if (!customerName || !carModel || !bookingDate || !pickupDate || !returnDate || !price || !status || !paymentStatus)
        throw new AppError("All fields are required", 400);
    if (price <= 0) throw new AppError("Price must be greater than 0", 400);
    if (new Date(returnDate) <= new Date(pickupDate))
        throw new AppError("Return date must be after pickup date", 400);
    return Booking.create(body);
};
const updateBooking = async (id, body) => {
    checkId(id);
    if (!(await Booking.findById(id))) throw new AppError("Booking Not Found", 404);
    if (body.price !== undefined && body.price <= 0) throw new AppError("Price must be greater than 0", 400);
    return Booking.findByIdAndUpdate(id, body, { new: true, runValidators: true });
};
const deleteBooking = async (id) => {
    checkId(id);
    if (!(await Booking.findById(id))) throw new AppError("Booking Not Found", 404);
    await Booking.findByIdAndDelete(id);
    return { message: "Booking Deleted Successfully" };
};
module.exports = { getAllBookings, getSingleBooking, addBooking, updateBooking, deleteBooking };
