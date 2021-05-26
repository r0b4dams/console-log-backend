const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WalkthroughSchema = new Schema({
  title: String,
  gameID: String,
  gameName: String,
  Content: String,
  link: String,
  rating: Number,
  user_id:{
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Walkthrough = mongoose.model("Walkthrough", WalkthroughSchema);

module.exports = Walkthrough;
