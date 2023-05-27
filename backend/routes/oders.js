const express = require("express");
const {
  deleteDeliveryOrder,
  updateDeliveryOrder,
  addDeliveryOrder,
  getDeliveryOrderById,
  getAllDeliveryOrders,
} = require("../controllers/OderControllers");

const router = express.Router();

// Get all Delivery Orders
router.get("/", getAllDeliveryOrders);

// Get a single Delivery Order by ID
router.get("/:id", getDeliveryOrderById);

// Add a Delivery Order
router.post("/", addDeliveryOrder);

// Update a Delivery Order
router.patch("/:id", updateDeliveryOrder);

// Delete a Delivery Order
router.delete("/:id", deleteDeliveryOrder);

module.exports = router;
