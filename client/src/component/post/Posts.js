import React, { useEffect } from "react";
// import { getPosts } from "../../action/post";
import { Post } from "./post/Post";
import { Grid, CircularProgress, Paper } from "@material-ui/core";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

export const Posts = ({ setCurrentID, currentID, posts }) => {
  // const posts = useSelector((state) => state.posts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Paper sx={{ my: 1, mx: "auto", maxWidth: 550, bgcolor: "grey.50" }}>
      <Grid container justifyContent="center" alignItems="center">
        {posts.reverse().map((post) => {
          return (
            <Grid item xs={12} key={post._id} sx={{ py: 2, maxWidth: 450 }}>
              <Post
                post={post}
                setCurrentID={setCurrentID}
                currentID={currentID}
              />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};
