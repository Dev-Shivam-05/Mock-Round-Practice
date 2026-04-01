import mongoose from "mongoose";

const movieSchema = {
  movieName: {
    type: String,
    required: true,
  },
  movieEmail: {
    type: String,
    required: true,
  },
  moviePhone: {
    type: String,
    required: true,
  },
  movieImage: {
    type: String,
    required: true,
  },
  movieStatus: {
    type: Boolean,
    default: false
  },
  movieCreatedAt: {
    type: String,
    default: null
  },
  movieUpdatedAt: {
    type: String,
    default: null
  },
};

const movieModel = mongoose.model('Movie',movieSchema);
export default movieModel;