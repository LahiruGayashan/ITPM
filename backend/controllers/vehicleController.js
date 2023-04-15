const Vehicle = require("../models/vehicleModel");
const mongoose = require("mongoose");

// Get all vehicles
const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get a single vehicle
const getVehicle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Invalid vehicle ID",
    });
  }

  try {
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      return res.status(404).json({
        error: "Vehicle not found",
      });
    }
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Create a vehicle
const createVehicle = async (req, res) => {
  const { vehicleNo, vehicleType, vehicleBook } = req.body;

  if (!vehicleNo || !vehicleType || !vehicleBook) {
    return res.status(400).json({
      error: "Please provide required fields",
    });
  }

  try {
    const vehicle = await Vehicle.create({
      vehicleNo,
      vehicleType,
      vehicleBook,
    });
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Delete a vehicle
const deleteVehicle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Invalid vehicle ID",
    });
  }

  try {
    const vehicle = await Vehicle.findByIdAndDelete(id);
    if (!vehicle) {
      return res.status(404).json({
        error: "Vehicle not found",
      });
    }
    res.status(200).json({
      message: "Vehicle deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Update a vehicle
const updateVehicle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Invalid vehicle ID",
    });
  }

  const vehicle = await Vehicle.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...req.body,
    }
  );

  if (!vehicle) {
    return res.status(404).json({
      error: "Vehicle not found",
    });
  }
  res.status(200).json(vehicle);
};

module.exports = {
  getVehicles,
  getVehicle,
  createVehicle,
  deleteVehicle,
  updateVehicle,
};

