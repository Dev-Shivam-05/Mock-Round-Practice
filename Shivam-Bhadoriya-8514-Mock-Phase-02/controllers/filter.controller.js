import Employee from "../models/employee.model.js";

const filterController = {
  async filterEmployeePage(req, res) {
    let employee = await Employee.find({});
    return res.render("pages/filterEmployee.ejs", { employee });
  },

  async filterEmployee(req, res) {
    console.log(req.body);
    let employee = [await Employee.findOne(req.body)] || [];
    return res.render("pages/filterEmployee.ejs", { employee });
  },
};

export default filterController;
