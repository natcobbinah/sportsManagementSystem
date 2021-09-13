const mongoose = require("mongoose");
const { Schema } = mongoose;

const FixturesSchema = new Schema({
  teamOne: {
    type: String,
    required: true,
  },
  teamTwo: {
    type: String,
    required: true,
  },
  scores: {
    type: String,
  },
  playatTimeDate: {
    type: Date,
    required: true,
  },
  postPoned: {
    type: Boolean,
    required: true,
  },
  playGround: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  winner: {
    type: String,
    required: true,
  },
  looser: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Fixtures", FixturesSchema);
