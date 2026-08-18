const express = require("express");
const router = express.Router();

const {
    getAllCars,
    getSingleCar,
    addCar,
    updateCar,
    deleteCar
} = require("../controllers/carController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getAllCars);
router.get("/:id", authMiddleware, getSingleCar);
router.post("/", authMiddleware, addCar);
router.put("/:id", authMiddleware, updateCar);
router.delete("/:id", authMiddleware, deleteCar);

module.exports = router;
