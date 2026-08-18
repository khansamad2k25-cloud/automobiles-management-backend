const service = require("../services/customerService");
const asyncHandler = require("../utils/asyncHandler");

const getAllCustomers = asyncHandler(async (req, res) => {
    const data = await service.getAllCustomers();
    res.status(200).json({ success: true, data });
});

const getSingleCustomer = asyncHandler(async (req, res) => {
    const data = await service.getSingleCustomer(req.params.id);
    res.status(200).json({ success: true, data });
});

const addCustomer = asyncHandler(async (req, res) => {
    const data = await service.addCustomer(req.body);
    res.status(201).json({ success: true, data });
});

const updateCustomer = asyncHandler(async (req, res) => {
    const data = await service.updateCustomer(req.params.id, req.body);
    res.status(200).json({ success: true, data });
});

const deleteCustomer = asyncHandler(async (req, res) => {
    const data = await service.deleteCustomer(req.params.id);
    res.status(200).json({ success: true, ...data });
});

module.exports = {
    getAllCustomers,
    getSingleCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer
};
