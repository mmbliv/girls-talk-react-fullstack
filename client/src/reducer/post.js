import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constance/actionTypes";
const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case DELETE:
      return posts.filter((item) => item._id !== action.payload);
    case UPDATE:
      return posts.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
        return item;
      });
    case LIKE:
      return posts.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    default:
      return posts;
  }
};
export default reducer;
