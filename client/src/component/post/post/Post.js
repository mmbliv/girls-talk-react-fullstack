import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  InputBase,
  Typography,
  Button,
  CardHeader,
  Container,
  IconButton,
  Box,
  Drawer,
  TextField,
} from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import Avatar from "@mui/material/Avatar";
import base64 from "react-native-base64";

import moment from "moment";
import { deletePost } from "../../../action/post";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Comment } from "../../Comment";
import { createComment, deleteComment } from "../../../action/post";

export const Post = ({ post, setCurrentID, currentID }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment, setComment] = useState({ body: "", _id: "" });
  const [toggleComment, setToggleComment] = useState(false);
  console.log(comment);

  const deleteAndReload = () => {
    dispatch(deletePost(post._id));
  };
  const editePost = () => {
    setCurrentID(post._id);
    history.push("/creat");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(comment);
    dispatch(createComment(post._id, comment));
    setComment({ body: "", _id: "" });
    setToggleComment(false);
  };
  const deleteCommentBtn = (postID, commentID) => {
    dispatch(deleteComment(postID, commentID));
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "warning.light" }}>R</Avatar>}
        title={post.creator}
        subheader={moment(post.createdAt).fromNow()}
      />
      {post.selectedFile && (
        <CardMedia
          component="img"
          height="194"
          image={base64.decode(post.selectedFile)}
          alt=""
        />
      )}
      <CardContent>
        <Typography variant="body2" color="secondary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="small"
          onClick={() => {
            deleteAndReload();
          }}
        >
          <DeleteOutlineRoundedIcon />
        </IconButton>
        <IconButton
          size="small"
          sx={{ px: 5 }}
          onClick={() => {
            editePost();
          }}
        >
          <EditRoundedIcon />
        </IconButton>
        <IconButton size="small" onClick={() => setToggleComment(true)}>
          <MessageRoundedIcon />
        </IconButton>
      </CardActions>

      <Drawer
        onClose={() => setToggleComment(false)}
        onOpen={() => setToggleComment(true)}
        open={toggleComment}
        variant="temporary"
        anchor="bottom"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            multiline
            minRows={5}
            value={comment.body}
            onChange={(e) => {
              setComment({ body: e.target.value, _id: "" });
            }}
            sx={{ width: "100%", height: "100%" }}
          />
          <Button
            type="submit"
            variant="text"
            sx={{ position: "absolute", right: 3, bottom: 2 }}
          >
            submit
          </Button>
        </Box>
      </Drawer>

      <Container>
        <Comment post={post} deleteCommentBtn={deleteCommentBtn} />
      </Container>
    </Card>
  );
};
