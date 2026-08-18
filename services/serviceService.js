const mongoose = require("mongoose");
const Service = require("../models/service");
const AppError = require("../utils/AppError");

const checkId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new AppError("Invalid Service ID", 400);
};
const getAllServices = async () => {
    const data = await Service.find();
    if (!data.length) throw new AppError("No Services Found", 404);
    return data;
};
const getSingleService = async (id) => {
    checkId(id);
    const data = await Service.findById(id);
    if (!data) throw new AppError("Service Not Found", 404);
    return data;
};
const addService = async (body) => {
    const { serviceName, carModel, serviceType, serviceDate, cost, mechanicName, status, paymentStatus } = body;
    if (!serviceName || !carModel || !serviceType || !serviceDate || !cost || !mechanicName || !status || !paymentStatus)
        throw new AppError("All fields are required", 400);
    if (cost <= 0) throw new AppError("Cost must be greater than 0", 400);
    return Service.create(body);
};
const updateService = async (id, body) => {
    checkId(id);
    if (!(await Service.findById(id))) throw new AppError("Service Not Found", 404);
    if (body.cost !== undefined && body.cost <= 0) throw new AppError("Cost must be greater than 0", 400);
    return Service.findByIdAndUpdate(id, body, { new: true, runValidators: true });
};
const deleteService = async (id) => {
    checkId(id);
    if (!(await Service.findById(id))) throw new AppError("Service Not Found", 404);
    await Service.findByIdAndDelete(id);
    return { message: "Service Deleted Successfully" };
};
module.exports = { getAllServices, getSingleService, addService, updateService, deleteService };
