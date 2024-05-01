import express from "express";
import Employee from "../models/employeeModel.js";

const empRouter = express.Router();

empRouter.get("/", async (req, res) => {
  const employees = await Employee.find({});

  res.send(employees);
});

empRouter.get("/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  res.send(employee);
});

empRouter.post("/add", async (req, res) => {
  const emp = new Employee({
    fname: req.body.fname,
    lname: req.body.lname,
    phone: req.body.contact,
    email: req.body.email,
  });

  const newEmp = await emp.save();

  res.send(newEmp);
});

empRouter.post("/edit/:id", async (req, res) => {
  const findEmployee = await Employee.findById(req.params.id);
  // res.send(employee);
  findEmployee.fname = req.body.newFirstName;
  findEmployee.lname = req.body.newLastName;
  findEmployee.email = req.body.newEmail;
  findEmployee.phone = req.body.newContact;

  const updatedEmp = await findEmployee.save();
  res.send(updatedEmp);
});

empRouter.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.send({ message: "Employee not found" });
    }

    await employee.deleteOne();
    res.send({ message: "Employee removed successfully" });
  } catch (err) {
    res.send({ message: "Error deleting employee" });
  }
});

export default empRouter;
