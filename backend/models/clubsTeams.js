const mongoose = require("mongoose");
const { Schema } = mongoose;

const clubTeamsSchema = new Schema({
  clubName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  clubCoach: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coach",
    },
  ],
  clubManager: {
    type: String,
    required: true,
  },
  clubSponsors: [
    {
      sponsorName: String,
    },
  ],
  clubBadge: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("clubTeam", clubTeamsSchema);
