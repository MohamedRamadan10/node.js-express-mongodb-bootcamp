"use strict";
const express = require("express");
const morgan = require("morgan");
const tourRoutes = require("./routes/tourRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
   console.log("Hello from the middleware 👋");
   next();
});
app.use((req, res, next) => {
   req.requestTime = new Date().toISOString();
   next();
});

app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/users", userRoutes);

module.exports = app;
