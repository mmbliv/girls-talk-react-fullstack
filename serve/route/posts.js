import express from "express";
import {
  getPosts,
  // getPost,
  createPost,
  updatePost,
  // likePost,
  deletePost,
} from "../controller/posts.js";
import { createComment, deleteComment } from "../controller/comment.js";
const router = express.Router();
router.route("/").get(getPosts).post(createPost);
router.route("/:id").patch(updatePost).delete(deletePost);
// router.patch("/:id/likepost", likePost);
router.route("/:id/createcomment").patch(createComment);
// router.patch("/:id/createcomment", createComment);
router.delete("/:id/deletecomment", deleteComment);
export default router;
