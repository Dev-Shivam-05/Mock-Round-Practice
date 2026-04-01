import movieModel from "../models/movie.models.js";

const userController = {
  addMoviesPage(req, res) {
    return res.render("index.ejs");
  },
  async viewMoviesPage(req, res) {
    let Movies = await movieModel.find({});
    return res.render("pages/view-movies.ejs", { Movies });
  },
  async deleteMovie(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      let deletedData = await movieModel.findByIdAndDelete(id);
      console.log(deletedData);
      return res.redirect(req.get("Referrer") || "/pages/view-movie");
    } catch (error) {
      console.log(error.message);
    }  
  },
  async editMoviesPage(req, res) {
    const { id } = req.params;
    let User = await movieModel.find({ _id: id });
    let user;
    User.forEach((element) => {
      user = element;
    });
    return res.render("pages/edit.ejs", { User: user });
  },
  async updateData(req, res) {
    const { id } = req.params;
    let movieUpdatedAt = new Date();
    let movieImage = req.file.path;
    let updatedData = await movieModel.findByIdAndUpdate(id,{
      ...req.body,
      movieUpdatedAt,
      movieImage,
    });
    return res.redirect('/view-movie');
  },
};

export default userController;
