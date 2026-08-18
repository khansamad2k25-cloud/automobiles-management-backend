const mongoose = require("mongoose");
const Car = require("../models/cars");
const AppError = require("../utils/AppError");

const checkId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError("Invalid Car ID", 400);
    }
};

const getAllCars = async () => {
    const cars = await Car.find();

    if (cars.length === 0) {
        throw new AppError("No Cars Found", 404);
    }

    return cars;
};

const getSingleCar = async (id) => {
    checkId(id);

    const car = await Car.findById(id);

    if (!car) {
        throw new AppError("Car Not Found", 404);
    }

    return car;
};

const addCar = async (data) => {
    const { brand, model, year, color, fuel, transmission, price, mileage, stock } = data;

    if (!brand || !model || !year || !color || !fuel || !transmission || !price) {
        throw new AppError("Required fields are missing", 400);
    }

    if (year < 1900) throw new AppError("Invalid year", 400);
    if (price <= 0) throw new AppError("Price must be greater than 0", 400);
    if (mileage !== undefined && mileage < 0) throw new AppError("Mileage cannot be negative", 400);
    if (stock !== undefined && stock < 0) throw new AppError("Stock cannot be negative", 400);

    const findCar = await Car.findOne({ brand, model });

    if (findCar) {
        throw new AppError("Car already exists", 400);
    }

    return Car.create({ brand, model, year, color, fuel, transmission, price, mileage, stock });
};

const updateCar = async (id, data) => {
    checkId(id);

    const car = await Car.findById(id);

    if (!car) throw new AppError("Car Not Found", 404);

    if (data.price !== undefined && data.price <= 0) {
        throw new AppError("Price must be greater than 0", 400);
    }
    if (data.year !== undefined && data.year < 1900) {
        throw new AppError("Invalid year", 400);
    }
    if (data.mileage !== undefined && data.mileage < 0) {
        throw new AppError("Mileage cannot be negative", 400);
    }
    if (data.stock !== undefined && data.stock < 0) {
        throw new AppError("Stock cannot be negative", 400);
    }

    return Car.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    });
};

const deleteCar = async (id) => {
    checkId(id);

    const car = await Car.findById(id);

    if (!car) throw new AppError("Car Not Found", 404);

    await Car.findByIdAndDelete(id);

    return { message: "Car Deleted Successfully" };
};

module.exports = { getAllCars, getSingleCar, addCar, updateCar, deleteCar };
