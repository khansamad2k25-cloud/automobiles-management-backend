const service = require("../services/carService");
const asyncHandler = require("../utils/asyncHandler");

const getAllCars = asyncHandler(async (req, res) => {
    const data = await service.getAllCars();
    res.status(200).json({ success: true, data });
});

const getSingleCar = asyncHandler(async (req, res) => {
    const data = await service.getSingleCar(req.params.id);
    res.status(200).json({ success: true, data });
});

const addCar = asyncHandler(async (req, res) => {

    const payload = req.body;

    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
        return res.status(400).json({
            success: false,
            message: "Invalid request payload"
        });
    }

    if (Object.keys(payload).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Request body cannot be empty"
        });
    }

    const data = await service.addCar(payload);

    res.status(201).json({
        success: true,
        data
    });
});

const updateCar = asyncHandler(async (req, res) => {
    const data = await service.updateCar(req.params.id, req.body);
    res.status(200).json({ success: true, data });
});

const deleteCar = asyncHandler(async (req, res) => {
    const data = await service.deleteCar(req.params.id);
    res.status(200).json({ success: true, ...data });
});

module.exports = {
    getAllCars,
    getSingleCar,
    addCar,
    updateCar,
    deleteCar
};
