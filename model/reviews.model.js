let mongoose = require("mongoose");

let review_schemma = mongoose.Schema({
  title: String,
  review: String,
  image: String,
  movie: String,
  movie_director: String,
  movie_producer: String,
  movie_cast: [String],
  movie_music_director: String,
  movie_cinematographer: String,
  movie_editor: String,
  movie_tags: [String],
  status: Boolean,
  created_date: Date,
  rating: Number
});

const review_model = mongoose.model("reviews", review_schemma);

module.exports = review_model;
