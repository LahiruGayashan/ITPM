require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const vehicleRoutes =require("./routes/vehicles");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);


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

  //AS an experiened data entry officer,process and enter information in to the database.
  //track each request and communicate with the team if  there are issues.,
  //Data entry into  the customer's database and also as A Tickting officer.
  //I have done updating the tracking Operation Manual collaboarationg with partner box office
  //manager on all operational issues,including refunds,promotional builds, discrepancies and 
  //troubleshooting and all duties as assiged by  the ticketing supervisor and the director of 
  //revenue management. I am able to contribute to the success of thecompany.