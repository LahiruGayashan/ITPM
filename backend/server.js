require("dotenv").config();
const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const vehicleRoutes = require("./routes/vehicles");
const oderRoutes = require("./routes/oders");
const adminRoutes = require("./routes/admin");

// express app
const app = express();

// middleware
app.use(express.json());

// cors
app.use(cors());
// routes
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/users", userRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/oders", oderRoutes);
app.use("/api/admin", adminRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");

    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
