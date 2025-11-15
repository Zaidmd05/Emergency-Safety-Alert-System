const mongoose = require('mongoose');

const sosSchema = new mongoose.Schema({
  username: String,
  location: {
    lat: Number,
    lng: Number
  },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("SosRequest", sosSchema);
