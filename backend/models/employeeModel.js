import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamp: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
