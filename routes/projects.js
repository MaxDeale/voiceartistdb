import express from "express";
import { auth } from "../middleware/auth.js";
import Artist from "../models/Artist.js";

import { check, validationResult } from "express-validator";

const router = express.Router();
// route to post a new comment, it is a post request and privately accessed
router.post("/:id", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  // saving the artist data to a variable from the request body
  const { project } = req.body;

  try {
    let artist = await Artist.findById(req.params.id);
    console.log(artist._id);
    await artist.projects.push(project);
    await artist.save();
    console.log("project saved");
    window.location.reload();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default router;
