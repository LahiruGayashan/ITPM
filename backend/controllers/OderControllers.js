const Oder = require("../models/oderModel");
const mongoose = require("mongoose");

// Get all Delivery Orders
const getAllDeliveryOrders = async (req, res) => {
  try {
    const orderPosts = await Oder.find({});
    res.status(200).json(orderPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Delivery Order by ID
const getDeliveryOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such orderPost" });
    }

    const orderPost = await Oder.findById(id);

    if (!orderPost) {
      return res.status(404).json({ error: "No such orderPost" });
    }

    res.status(200).json(orderPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new Delivery Order
const addDeliveryOrder = async (req, res) => {
  try {
    const orderPost = await Oder.create(req.body);
    res.status(200).json(orderPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Delivery Order
const deleteDeliveryOrder = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such orderPost" });
    }

    const orderPost = await Oder.findOneAndDelete({ _id: id });

    if (!orderPost) {
      return res.status(404).json({ error: "No such orderPost" });
    }

    res.status(200).json(orderPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Delivery Order
const updateDeliveryOrder = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such orderPost" });
    }

    const orderPost = await Oder.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!orderPost) {
      return res.status(404).json({ error: "No such orderPost" });
    }

    res.status(200).json(orderPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteDeliveryOrder,
  updateDeliveryOrder,
  addDeliveryOrder,
  getDeliveryOrderById,
  getAllDeliveryOrders,
};
