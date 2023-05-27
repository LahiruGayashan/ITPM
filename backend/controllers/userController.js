const User = require("../models/userModel");
const mongoose = require("mongoose");

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get a single user
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Invalid user ID",
    });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Create a user
const createUser = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    address,
    phone,
    vehicle_Number,
    Vehicle_Brand,
    vehicleType,
  } = req.body;

  if (!first_name || !last_name || !email || !phone || !address) {
    return res.status(400).json({
      error: "Please provide required fields",
    });
  }

  try {
    const user = await User.create({
      first_name,
      last_name,
      email,
      address,
      phone,
      vehicle_Number,
      Vehicle_Brand,
      vehicleType,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Invalid user ID",
    });
  }

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Search for users
const searchUsers = async (req, res) => {
  const { query } = req.query;

  try {
    const users = await User.find({
      $text: {
        $search: query,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//update user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "No such user",
    });
  }

  const user = await User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(400).json({
      error: "No such user",
    });
  }

  res.status(200).json(user);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  searchUsers,
};
