const express = require("express");
const router = express.Router();

const {
    getAllBookings,
    getSingleBooking,
    addBooking,
    updateBooking,
    deleteBooking
} = require("../controllers/bookingController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getAllBookings);
router.get("/:id", authMiddleware, getSingleBooking);
router.post("/", authMiddleware, addBooking);
router.put("/:id", authMiddleware, updateBooking);
router.delete("/:id", authMiddleware, deleteBooking);

module.exports = router;
