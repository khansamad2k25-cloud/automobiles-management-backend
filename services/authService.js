const User = require("../models/user");
const AppError = require("../utils/AppError");

const signup = async (data) => {
    const { name, email, age, password, phone, city, gender, role } = data;

    if (!name || !email || !age || !password || !phone || !city || !gender) {
        throw new AppError("All fields are required", 400);
    }

    const findUser = await User.findOne({ email });

    if (findUser) {
        throw new AppError("User already exists", 400);
    }

    return User.create({
        name, email, age, password, phone, city, gender, role
    });
};

const login = async (email, password) => {
    if (!email || !password) {
        throw new AppError("Missing credentials", 400);
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new AppError("Wrong credentials", 400);
    }

    if (user.password !== password) {
        throw new AppError("Password not match", 400);
    }

    return user;
};

module.exports = { signup, login };
