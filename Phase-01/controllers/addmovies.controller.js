import movieModel from "../models/movie.models.js";

const addMovies = async (req, res) => {
  try {
    let movieCreatedAt = new Date();
    let movieImage = req.file.path;
    let newData = await movieModel.create({
      ...req.body,
      movieCreatedAt,
      movieImage,
    });
    console.log(newData);
    res.redirect('/add-movie')
  } catch (error) {
    console.log(error.message);
  }
};

export default addMovies;