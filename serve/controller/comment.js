// import comment from "../models/comment.js";
// export const getComment = async (req, res) => {
//   const comment = await comment.find({});
//   res.statue(200).json({ comment });
// };
// export const createComment = async (req, res) => {
//   const comment = await comment.create;
// };
// export const deleteComment = async () => {};
import mongoose from "mongoose";
import postInfo from "../models/postInformation.js";
export const createComment = async (req, res) => {
  const commentData = await postInfo.findById({ _id: req.params.id });

  commentData.comments.push({
    body: req.body.body,
    _id: new mongoose.Types.ObjectId(),
  });
  await commentData.save();

  res.status(200).json({ commentData });
};

export const deleteComment = async (req, res) => {
  const commentData = await postInfo.findById({ _id: req.params.id });
  commentData.comments.pull(req.body.id);
  // const deletecomment=commentData.comments.find((item)=>{item._id===req.body._id})
  // deleteComment.comments._id.remove();
  res.status(200).json({ commentData });
};
