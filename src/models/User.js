import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: {
    type: String,
    default: "https://www.flaticon.com/svg/static/icons/svg/3064/3064559.svg",
  },
  facebookId: Number,
  githubId: Number,
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
