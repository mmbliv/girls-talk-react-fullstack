import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  message: String,
  creator: String,
  selectedFile: String,
  comments: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("PostInfor", postSchema);
