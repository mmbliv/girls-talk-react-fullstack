import axios from "axios";
const url = "http://localhost:5000/posts";
export const fetchPosts = () => axios.get(url);
// export const fetchPost = (id) => axios.get(`${url}/${id}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, updatePost) =>
  axios.patch(`${url}/${id}`, updatePost);

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const createComment = (id, newComment) =>
  axios.patch(`${url}/${id}/createcomment`, newComment);
export const deleteComment = (id, deleteCommentID) => {
  axios.delete(`${url}/${id}/deletecomment`, { data: { deleteCommentID } });
};
