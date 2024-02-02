const express = require("express");
const router = express.Router();
const {
  getAllLyrics,
  getLyric,
  createLyric,
  deleteLyric,
  updateLyrics,
} = require("../controllers/lyricsControllers");

router
  // get all lyrics
  .get("/", getAllLyrics)

  // get a single lyric
  .get("/:id", getLyric)

  // create a single lyric
  .post("/", createLyric)

  // delete a single lyric
  .delete("/:id", deleteLyric)

  // update a single lyric
  .patch("/:id", updateLyrics);

// export all routes
module.exports = router;
