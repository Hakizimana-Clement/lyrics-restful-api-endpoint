const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lyricSchema = new Schema(
  {
    songName: {
      type: String,
      required: true,
    },
    songArtist: {
      type: String,
      required: true,
    },
    songLyric: {
      type: String,
      required: true,
    },
    songImage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lyric", lyricSchema);
