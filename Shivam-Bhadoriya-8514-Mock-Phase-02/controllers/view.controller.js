import Employee from "../models/employee.model.js";

const viewController = {
  async viewEmployeePage(req, res) {
    let employee = await Employee.find({});
    return res.render("pages/viewEmployee.ejs", { employee });
  },  
};

export default viewController;
