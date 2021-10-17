import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  Button,
  Paper,
  IconButton,
  Container,
  ImageListItem,
  InputBase,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { createPost, updatePost } from "../../action/post";
import { useDispatch } from "react-redux";
import { Box } from "@material-ui/system";
import base64 from "react-native-base64";
import { Link } from "react-router-dom";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import "./style.css";

export const Form = ({ setCurrentID, currentID, posts }) => {
  // find the currentID post
  const currentPost = posts.find((post) => post._id === currentID);

  const history = useHistory();
  const inputRef = useRef();
  const dispatch = useDispatch();

  //state set
  // use picture(need a url type) state to preview the img, if the user need to edite the post(there is currentID),show the old img first
  const [picture, setPicture] = useState(
    currentID ? base64.decode(currentPost.selectedFile) : ""
  );
  // use base64Data to store the img in mongodb, use the fileReader API to read the input file, and the baseecode package to encode the file(see below)
  const [base64Data, setBase64Data] = useState("");
  const [newPost, setNewPost] = useState(
    currentID
      ? currentPost
      : {
          message: "",
          creator: "",
          selectedFile: "",
        }
  );

  // I dont know why need use useEffect instead of setNewPost in when submit kuku
  useEffect(() => {
    if (!base64Data && picture && currentID) {
      setNewPost({ ...newPost, selectedFile: newPost.selectedFile });
    } else {
      setNewPost({ ...newPost, selectedFile: base64Data });
    }
  }, [base64Data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentID) {
      dispatch(updatePost(currentID, newPost));
    } else {
      dispatch(createPost(newPost));
    }
    setNewPost({ message: "", creator: "", selectedFile: "" });
    setCurrentID();
    setBase64Data("");
    history.push("/");
  };
  // cancel or rechoose a uploading img
  const clear = () => {
    setPicture("");
    setBase64Data("");
    inputRef.current.value = "";
  };
  // endcode the updated img and set the picture(to the preview the img) and the base64Data(to store the img into database)
  const encodeImageFileAsURL = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const reader2 = new FileReader();
    console.log("hi");

    reader.onloadend = function () {
      setPicture(reader.result);
    };
    reader.readAsDataURL(file);

    reader2.onloadend = function () {
      setBase64Data(base64.encode(reader2.result));
      console.log(base64Data);
    };

    reader2.readAsDataURL(file);
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 550, my: 1, mx: "auto" }}>
      <Box sx={{ maxWidth: 400, my: 1, mx: "auto" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="make a name"
            margin="normal"
            multiline
            fullWidth
            value={newPost.creator}
            onChange={(e) =>
              setNewPost({
                ...newPost,
                creator: e.target.value,
              })
            }
          />
          <TextField
            label="say something"
            multiline
            fullWidth
            value={newPost.message}
            minRows={5}
            onChange={(e) =>
              setNewPost({
                ...newPost,
                message: e.target.value,
              })
            }
          />

          <InputBase
            inputComponent="input"
            inputRef={inputRef}
            type="file"
            onChange={(e) => {
              encodeImageFileAsURL(e);
            }}
          />

          {picture && (
            <ImageListItem sx={{ height: 150, width: 150 }}>
              <img src={picture} alt="" sx={{ position: "relative" }} />
              <Box
                sx={{
                  position: "absolute",
                  top: 1,
                  left: 1,
                  bgcolor: "grey",
                }}
              >
                <IconButton
                  onClick={() => clear()}
                  sx={{ borderRadius: "none" }}
                >
                  <HighlightOffIcon style={{ fontSize: "15px" }} />
                </IconButton>
              </Box>
            </ImageListItem>
          )}
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: 1,
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: 1, border: 1, borderColor: "primary.main" }}
              type="submit"
            >
              {currentID ? "UPDATA" : "SUBMIT"}
            </Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="small"
                sx={{ borderRadius: 1, border: 1, borderColor: "primary.main" }}
                onClick={() => setCurrentID()}
              >
                CANCLE
              </Button>
            </Link>
          </Container>
        </form>
      </Box>
    </Paper>
  );
};
