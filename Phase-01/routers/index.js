import { Router } from "express";
import userController from "../controllers/user.controller.js";
import imageUpload from "../middleware/imageUpload.js";
import addMovies from "../controllers/addmovies.controller.js";

const router = Router();

router.get("/add-movie", userController.addMoviesPage);
router.post("/add-movie", imageUpload, addMovies);
router.get("/view-movie", userController.viewMoviesPage);
router.get("/delete/:id", userController.deleteMovie);
router.get("/edit-movie/:id", userController.editMoviesPage);
router.post("/edit-movie/:id", imageUpload, userController.updateData);

export default router;
