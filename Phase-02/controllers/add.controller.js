import Employee from "../models/employee.model.js";

const addController = {
  addEmployeePage(req, res) {
    return res.render("pages/addEmployee.ejs");
  },
  async createEmployee(req, res) {
    try {
      console.log(req.body);
      const newEmployee = await Employee.create(req.body);
      console.log(`New Employee Is Successfully Created!`);
      return res.redirect("/addEmployee");
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default addController;
