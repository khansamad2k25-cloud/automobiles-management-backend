const express = require("express");
const router = express.Router();

const {
    getAllServices,
    getSingleService,
    addService,
    updateService,
    deleteService
} = require("../controllers/serviceController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getAllServices);
router.get("/:id", authMiddleware, getSingleService);
router.post("/", authMiddleware, addService);
router.put("/:id", authMiddleware, updateService);
router.delete("/:id", authMiddleware, deleteService);

module.exports = router;
