import Employee from "../models/employee.model.js";

const searchController = {
  async searchEmployeePage(req, res) {
    let employee = await Employee.find({});
    return res.render("pages/searchEmployee.ejs", { employee });
  },

  async searchEmployee(req, res) {
    console.log(req.body);
    let employee = [await Employee.findOne(req.body)] || [];
    return res.render("pages/searchEmployee.ejs", { employee });
  },
};

export default searchController;
