import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  // LIKE,
  CREATECOMMENT,
  DELETECOMMENT,
} from "../constance/actionTypes";
const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log("fetch");
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
    // case LIKE:
    //   return posts.map((item) =>
    //     item._id === action.payload._id ? action.payload : item
    //   );
    case CREATECOMMENT:
      return posts.map((item) => {
        if (item._id === action.payload._id) {
          item.comments = action.payload.comments;
        }

        return item;
      });
    case DELETECOMMENT:
      return posts.map((item) => {
        if (item._id === action.payload.id) {
          item.comments = item.comments.filter(
            (com) => com._id !== action.payload.deleteCommentID
          );
        }
        return item;
      });
    default:
      return posts;
  }
};
export default reducer;
