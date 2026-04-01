import Employee from "../models/employee.model.js";

const employeeController = {
  async deleteEmployee(req, res) {
    let { id } = req.params;
    let deletedEmployee = await Employee.findByIdAndDelete(id);
    console.log(deletedEmployee);
    return res.redirect("/viewEmployee");
  },

  async editEmployeePage(req, res) {
    let { id } = req.params;
    let employee = await Employee.findById(id);
    console.log(employee);
    return res.render("pages/editEmployee.ejs", { employee });
  },
  async editEmployee(req, res) {
    let { id } = req.params;
    let employee = await Employee.findById(id);
    console.log(employee);
    return res.render("pages/editEmployee.ejs", { employee });
  },
};

export default employeeController;
