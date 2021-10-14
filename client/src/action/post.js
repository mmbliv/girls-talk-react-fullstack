import * as API from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constance/actionTypes";
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
    console.log("delete");
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await API.updatePost(id, updatedPost);
    dispatch({ type: UPDATE, payload: data.post });
    console.log(data);
    console.log("update");
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await API.createPost(newPost);
    dispatch({ type: CREATE, payload: data.post });
    console.log("create");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await API.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};