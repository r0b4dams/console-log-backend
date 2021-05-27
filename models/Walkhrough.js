const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WalkthroughSchema = new Schema({
  title: String,
  gameID: Number,
  gameName: String,
  Content: String,
  link: String,
  rating: Number, // default should be zero

  user_id:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },

},

{ timestamps: { createdAt: 'created',
                updatedAt: 'updated' }
});

const Walkthrough = mongoose.model("Walkthrough", WalkthroughSchema);

module.exports = Walkthrough;
