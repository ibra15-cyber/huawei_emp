import express from "express";
// import Product from "../models/productModel.js";
// const Product = require('../models/product')
import data from "../data.js";
// import User from "../models/userModel.js";
import Employee from "../models/employeeModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  //   await Employee.deleteMany({}); //import all products inside product
  //   const createdEmployees = await Employee.insertMany(data.employees); //copy all from data to db

  await Employee.deleteMany({});
  const createdemployees = await Employee.insertMany(data.employees);

  res.send({ createdemployees });
});

export default seedRouter;
