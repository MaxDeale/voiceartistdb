import express from "express";
import { auth } from "../middleware/auth.js";
import { check, validationResult } from "express-validator";
import Artist from "../models/Artist.js";

const router = express.Router();
// route to get all artists, it is a get request and is privately accessed by individual users, all users should be able to see all artists
router.get("/", auth, async (req, res) => {
  try {
    // getting all artists from DB by user id
    const artists = await Artist.find().sort({
      date: -1,
    });
    res.json(artists);
    console.log(artists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// route to post a new artist, it is a post request and privately accessed
router.post(
  "/",
  [
    auth,
    [
      // using the middleware to do checks for authentication
      check("name", "Name Required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    // saving the artist data to a variable from the request body
    const {
      name,
      age,
      phone,
      email,
      gender,
      years,
      comments,
      projects,
      rating,
      availability,
    } = req.body;

    try {
      // saves a new artist to DB using the previously instantiated variable
      const newArtist = new Artist({
        name,
        age,
        email,
        phone,
        gender,
        years,
        comments,
        projects,
        rating,
        availability,
        user: req.user.id,
      });

      const artist = await newArtist.save();
      res.json(artist);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// route to update a artist, it is a put request, uses the router and auth middleware and is private
router.put("/:id", auth, async (req, res) => {
  const {
    name,
    age,
    email,
    phone,
    gender,
    years,
    comments,
    rating,
    availability,
  } = req.body;
  // build artist object
  const artistFields = {};
  if (name) artistFields.name = name;
  if (age) artistFields.age = age;
  if (phone) artistFields.phone = phone;
  if (email) artistFields.email = email;
  if (gender) artistFields.gender = gender;
  if (years) artistFields.years = years;
  if (comments) artistFields.comments = comments;
  if (projects) artistFields.projects = projects;
  if (rating) artistFields.rating = rating;
  if (years) artistFields.availability = availability;

  try {
    // using the id parameter to find the specific artist
    let artist = await Artist.findById(req.params.id);
    if (!pokemon)
      return res.status(404).json({
        msg: "Artist not found :(",
      });

    artist = await Artist.findByIdAndUpdate(
      req.params.id,
      {
        $set: artistFields,
      },
      {
        new: true,
      }
    );
    res.json(artist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// route to delete an artist , it is a delete request, and is done by a specific ID
router.delete("/:id", auth, async (req, res) => {
  try {
    // getting specific artist from DB by id
    let artist = await Artist.findById(req.params.id);
    if (!artist)
      return res.status(404).json({
        msg: "Artist not found :(",
      });

    await Artist.findByIdAndRemove(req.params.id);

    res.json({
      msg: "Artist deleted successfully",
    });

    res.json(artist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default router;
