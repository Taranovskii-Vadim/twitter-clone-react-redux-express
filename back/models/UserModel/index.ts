import { model, Schema } from "mongoose";

import { TUser } from "./types";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirmedHash: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { versionKey: false }
);

userSchema.set("toJSON", {
  transform: function (doc, user) {
    delete user.confirmedHash;
    delete user.password;
    return user;
  },
});

export const userModel = model<TUser>("User", userSchema);
