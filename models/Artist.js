const mongoose = require("mongoose");

const ArtistSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  years: {
    type: Number,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  availability: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: Array,
    required: false,
  },
  projects: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("artist", ArtistSchema);
