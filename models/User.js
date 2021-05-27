const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

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

// this will hash the password on creation
UserSchema.pre('save', function() {
  this.password = bcrypt.hashSync(this.password, 10);
  return this.password;
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
