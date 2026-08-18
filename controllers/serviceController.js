const service = require("../services/serviceService");
const asyncHandler = require("../utils/asyncHandler");

const getAllServices = asyncHandler(async (req, res) => {
    const data = await service.getAllServices();
    res.status(200).json({ success: true, data });
});

const getSingleService = asyncHandler(async (req, res) => {
    const data = await service.getSingleService(req.params.id);
    res.status(200).json({ success: true, data });
});

const addService = asyncHandler(async (req, res) => {
    const data = await service.addService(req.body);
    res.status(201).json({ success: true, data });
});

const updateService = asyncHandler(async (req, res) => {
    const data = await service.updateService(req.params.id, req.body);
    res.status(200).json({ success: true, data });
});

const deleteService = asyncHandler(async (req, res) => {
    const data = await service.deleteService(req.params.id);
    res.status(200).json({ success: true, ...data });
});

module.exports = {
    getAllServices,
    getSingleService,
    addService,
    updateService,
    deleteService
};
