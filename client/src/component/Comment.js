import { Container, IconButton, Paper, Typography } from "@material-ui/core";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const Comment = ({ post, deleteCommentBtn }) => {
  return (
    <>
      {post.comments.map((item) => {
        return (
          <Paper key={item._id}>
            <Container>
              <Typography>{item.body}</Typography>
            </Container>
            <IconButton
              onClick={() => {
                deleteCommentBtn(post._id, item._id);
              }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Paper>
        );
      })}
    </>
  );
};
