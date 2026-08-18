const express = require("express");
const router = express.Router();

const {
    getAllCustomers,
    getSingleCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer
} = require("../controllers/customerController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getAllCustomers);
router.get("/:id", authMiddleware, getSingleCustomer);
router.post("/", authMiddleware, addCustomer);
router.put("/:id", authMiddleware, updateCustomer);
router.delete("/:id", authMiddleware, deleteCustomer);

module.exports = router;
