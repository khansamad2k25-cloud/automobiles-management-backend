const mongoose = require("mongoose");
const Customer = require("../models/customer");
const AppError = require("../utils/AppError");

const checkId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new AppError("Invalid Customer ID", 400);
};

const getAllCustomers = async () => {
    const data = await Customer.find();
    if (!data.length) throw new AppError("No Customers Found", 404);
    return data;
};
const getSingleCustomer = async (id) => {
    checkId(id);
    const data = await Customer.findById(id);
    if (!data) throw new AppError("Customer Not Found", 404);
    return data;
};
const addCustomer = async (body) => {
    const { name, email, phone, age, city, address, gender } = body;
    if (!name || !email || !phone || !age || !city || !address || !gender)
        throw new AppError("All fields are required", 400);
    if (age < 18) throw new AppError("Age must be 18 or above", 400);
    if (await Customer.findOne({ email })) throw new AppError("Customer already exists", 400);
    return Customer.create(body);
};
const updateCustomer = async (id, body) => {
    checkId(id);
    if (!(await Customer.findById(id))) throw new AppError("Customer Not Found", 404);
    if (body.age !== undefined && body.age < 18) throw new AppError("Age must be 18 or above", 400);
    return Customer.findByIdAndUpdate(id, body, { new: true, runValidators: true });
};
const deleteCustomer = async (id) => {
    checkId(id);
    if (!(await Customer.findById(id))) throw new AppError("Customer Not Found", 404);
    await Customer.findByIdAndDelete(id);
    return { message: "Customer Deleted Successfully" };
};
module.exports = { getAllCustomers, getSingleCustomer, addCustomer, updateCustomer, deleteCustomer };
