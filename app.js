// dotenv
require("dotenv").config();
// express
const express = require("express");
const app = express();

// lyric routes
const lyricsRoutes = require("./routes/lyrics");

// env
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

// mongoose
const mongoose = require("mongoose");

// ************* middleware******************
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// ************* routes ******************
app.use("/api/lyrics", lyricsRoutes);

// ************* Connection ******************
mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(`Lyrics database connection established successfully`);
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
