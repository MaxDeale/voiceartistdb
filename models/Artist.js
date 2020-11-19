import mongoose from "mongoose";

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
    required: true,
    default: [],
  },
  projects: {
    type: Array,
    required: true,
    default: [],
  },
});

const Artist = mongoose.model("Artist", ArtistSchema);

export default Artist;
