import { Container, IconButton, Paper, Typography } from "@material-ui/core";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const Comment = ({ post, deleteCommentBtn }) => {
  return (
    <>
      {post.comments.map((item) => {
        return (
          <Paper key={item._id} sx={{ mb: 3, bgcolor: "grey.200" }}>
            <Container>
              <Typography>{item.body}</Typography>
            </Container>
            <IconButton
              sx={{ ml: 45 }}
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
