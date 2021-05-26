const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  // need an array of favorite walkthrough IDs
  favs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Walkthrough"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
