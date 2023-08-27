const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    location: {
        country: {
          type: String,
          required: [true, 'Country is required.'],
        },
        city: {
          type: String,
          required: [true, 'City is required.'],
        },
        postalCode: {
          type: String,
          required: [true, 'Postal code is required.'],
        },
      },
    userImage: {
      type: String,
      default: '/Users/Matt/Desktop/Ironhack/woof-practice/server/public/images/CW-user-avatar.png'
    },
    usersPetId: {
      type: [Schema.Types.ObjectId], ref: 'Pet'
    },
    usersGroups: {
      type: [Schema.Types.ObjectId], ref: 'Group'
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;