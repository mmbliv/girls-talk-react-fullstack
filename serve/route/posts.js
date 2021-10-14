import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controller/posts.js";
// import {
//   getComment,
//   createComment,
//   deleteComment,
// } from "../controller/comment.js";
const router = express.Router();
router.route("/").get(getPosts).post(createPost);
router.route("/:id").patch(updatePost).delete(deletePost).get(getPost);
router.patch("/:id/likepost", likePost);
export default router;
