import { Router } from "express";
import Employee from "../models/employee.model.js";
import addController from "../controllers/add.controller.js";
import viewController from "../controllers/view.controller.js";
import employeeController from "../controllers/employee.controller.js";
import searchController from "../controllers/search.controller.js";
import filterController from "../controllers/filter.controller.js";

const router = Router();

router.get("/", async (req, res) => {
  let employee = await Employee.find({});
  return res.render("index.ejs", { employee });
});

//add Employee
router.get("/addEmployee", addController.addEmployeePage);
router.post("/addEmployee", addController.createEmployee);

// view Employee
router.get("/viewEmployee", viewController.viewEmployeePage);

// Search Employee
router.get("/searchEmployee", searchController.searchEmployeePage);
router.post("/searchEmployee", searchController.searchEmployee);

// Filter Employee
router.get("/filterEmployee", filterController.filterEmployeePage);
router.post("/filterEmployee", searchController.searchEmployee);

// employee Actions
router.get("/delete/:id", employeeController.deleteEmployee);
router.post("/edit/:id", employeeController.editEmployee);

export default router;
