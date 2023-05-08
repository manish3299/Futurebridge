const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: String, required: true },
});

const Movie = mongoose.model("movies", moviesSchema);

module.exports = Movie;
