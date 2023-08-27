const { Schema, model } = require("mongoose");

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "This pet needs a name!"],
    },
    age: {
      type: Number,
      required: false
    },
    description: {
      type: String,
      required: [true, "Woof! Tell us a little about yourself!"]
    },
    petImage: {
      type: String,
      default: '/Users/Matt/Desktop/Ironhack/woof-practice/server/public/images/CW-user-avatar.png'
    },
    ownerId: {
      type: Schema.Types.ObjectId, ref: 'User' 
    },
    
  },
  {
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);

module.exports = Pet;