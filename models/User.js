const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  
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
