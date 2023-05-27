require("dotenv").config();
const Admin = require("../models/adminUserModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Login
const login = async (req, res) => {
  // Check if the email and password are valid
  const admin = await Admin.findOne({
    email: req.body.email,
  });

  // If the email isn't valid, or the password is incorrect, send an error
  if (!admin || !bcrypt.compareSync(req.body.password, admin.password)) {
    return res.status(401).json({ error: "Incorrect email or password" });
  }

  // Create a JWT token
  const token = jwt.sign(
    {
      org_id: admin._id,
    },
    process.env.JWT_SECRET
  );

  // Send the JWT as the response
  res.status(200).json({
    token,
    admin: {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
    },
  });
};

// Signup
const signup = async (req, res) => {
  // Check if the email is already in use
  const admin = await Admin.findOne({
    email: req.body.email,
  });

  // If the email is already in use, send an error
  if (admin) {
    return res.status(400).json({ error: "Email already in use" });
  }

  // Create a new user
  const newAdmin = await Admin.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  // Create a JWT token
  const token = jwt.sign(
    {
      org_id: newAdmin._id,
    },
    process.env.JWT_SECRET
  );

  // Send the JWT and the new user object as the response
  res.status(200).json({ token, newAdmin });
};

module.exports = {
  login,
  signup,
};
