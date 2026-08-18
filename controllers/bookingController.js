const service = require("../services/bookingService");
const asyncHandler = require("../utils/asyncHandler");

const getAllBookings = asyncHandler(async (req, res) => {
    const data = await service.getAllBookings();
    res.status(200).json({ success: true, data });
});

const getSingleBooking = asyncHandler(async (req, res) => {
    const data = await service.getSingleBooking(req.params.id);
    res.status(200).json({ success: true, data });
});

const addBooking = asyncHandler(async (req, res) => {
    const data = await service.addBooking(req.body);
    res.status(201).json({ success: true, data });
});

const updateBooking = asyncHandler(async (req, res) => {
    const data = await service.updateBooking(req.params.id, req.body);
    res.status(200).json({ success: true, data });
});

const deleteBooking = asyncHandler(async (req, res) => {
    const data = await service.deleteBooking(req.params.id);
    res.status(200).json({ success: true, ...data });
});

module.exports = {
    getAllBookings,
    getSingleBooking,
    addBooking,
    updateBooking,
    deleteBooking
};
