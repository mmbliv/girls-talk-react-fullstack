import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import Avatar from "@mui/material/Avatar";
import base64 from "react-native-base64";
import { CardHeader, IconButton } from "@mui/material";
import moment from "moment";
import { deletePost } from "../../../action/post";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export const Post = ({ post, setCurrentID, currentID }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteAndReload = () => {
    dispatch(deletePost(post._id));
  };
  const editePost = () => {
    setCurrentID(post._id);
    history.push("/creat");
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
        <IconButton size="small">
          <MessageRoundedIcon />
        </IconButton>
        <CardContent>
          <Typography></Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
};
