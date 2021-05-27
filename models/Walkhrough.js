const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WalkthroughSchema = new Schema({
  title: String,
  game_id: {
    type:Number,
    required: "Game ID is Required"
  },
  gameName: String,
  Content: String,
  link: String,

  rating: {
    type: Number,
    default: 0
  },

  user_id:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "User ID is Required"
  },

},

{ timestamps: { createdAt: 'created',
                updatedAt: 'updated' }
});

const Walkthrough = mongoose.model("Walkthrough", WalkthroughSchema);

module.exports = Walkthrough;
