import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  employeeRole: {
    type: String,
    required: true,
    // enum: [Developer, Manager, HR, Tester],
  },
  employeeDepartment: {
    type: String,
    required: true,
    // enum: [IT, HR, Sales, Finance],
  },
  employeeCity: {
    type: String,
    required: true,
    trim: true,
  },
  employeeSalary: {
    type: Number,
    required: true,
  },
  employeeExperience: {
    type: String,
    required: true,
    // enum: [1,2,3,4,5,6],
  },
});

const Employee = mongoose.model("employee", employeeSchema);

export default Employee;