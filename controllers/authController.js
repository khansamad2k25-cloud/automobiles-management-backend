const authService = require("../services/authService");
const generateToken = require("../utils/token");
const asyncHandler = require("../utils/asyncHandler");

const signup = asyncHandler(async (req, res) => {
    await authService.signup(req.body);
    res.status(201).json({ success: true, message: "Successfully signup" });
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await authService.login(email, password);
    const token = generateToken(user);
    res.status(200).json({ success: true, message: "Successfully login", token });
});

const logout = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, message: "Successfully logout" });
});

module.exports = { signup, login, logout };
