import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is Required",
  },
  title: {
    type: String,
    required: "Type is Required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  uploadUser: {
    type: String,
    required: "Upload User is Required",
  },
  userAvatar: {
    type: String,
    required: "Avatar required",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);

export default model;
