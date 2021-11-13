import * as API from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  // LIKE,
  CREATECOMMENT,
  DELETECOMMENT,
} from "../constance/actionTypes";
export const createComment = (id, newComment) => async (dispatch) => {
  try {
    const { data } = await API.createComment(id, newComment);
    dispatch({ type: CREATECOMMENT, payload: data.commentData });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteComment = (id, deleteCommentID) => async (dispatch) => {
  try {
    await API.deleteComment(id, deleteCommentID);
    dispatch({ type: DELETECOMMENT, payload: { id, deleteCommentID } });
  } catch (error) {
    console.log(error.message);
  }
};
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data.post });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await API.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await API.updatePost(id, updatedPost);
    dispatch({ type: UPDATE, payload: data.post });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await API.createPost(newPost);
    dispatch({ type: CREATE, payload: data.post });
  } catch (error) {
    console.log(error.message);
  }
};
// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await API.likePost(id);
//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
