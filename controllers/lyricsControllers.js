const Lyric = require("../models/modelLyrics");
const mongoose = require("mongoose");

// get all lyrics
const getAllLyrics = async (req, res) => {
  const lyrics = await Lyric.find({}).sort({ createdAt: -1 });
  res.status(200).json(lyrics);
};

// get a single lyric
const getLyric = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Lyric not found" });
  }

  try {
    const lyric = await Lyric.findById(id);
    res.status(200).json(lyric);
  } catch (error) {
    res.status(404).json({ error: "Lyric not found" });
  }
};
// create new lyric
const createLyric = async (req, res) => {
  const { songName, songLyric, songImage, songArtist } = req.body;
  try {
    const lyric = await Lyric.create({
      songImage,
      songName,
      songLyric,
      songArtist,
    });
    res.status(201).json(lyric);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a sinle lyric
const deleteLyric = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Lyric not found" });
  }

  try {
    const lyrics = await Lyric.findOneAndDelete({ _id: id });
    res.status(200).json(lyrics);
  } catch (error) {
    res.status(404).json({ error: "Lyric not found" });
  }
};

// update a sinle lyric
const updateLyrics = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Lyric not found" });
  }

  try {
    const lyrics = await Lyric.findOneAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json(lyrics);
  } catch (error) {
    res.status(404).json({ error: "Lyric not found" });
  }
};

module.exports = {
  getAllLyrics,
  getLyric,
  createLyric,
  deleteLyric,
  updateLyrics,
};
