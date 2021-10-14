import postInfo from "../models/postInformation.js";

export const getPost = async (req, res) => {
  const { id: postID } = req.params;
  const post = await postInfo.findOne({ _id: postID });

  res.status(200).json({ post });
  //   res.send("getPost");
};
export const getPosts = async (req, res) => {
  const post = await postInfo.find({});

  res.status(200).json({ post });
};
export const createPost = async (req, res) => {
  const post = await postInfo.create(req.body);
  res.status(200).json({ post });
};
export const updatePost = async (req, res) => {
  const {
    body: { message, creator, selectedFile },
    params: { id: postID },
  } = req;
  const post = await postInfo.findByIdAndUpdate({ _id: postID }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ post });
};
export const deletePost = async (req, res) => {
  const { id: postID } = req.params;
  const post = await postInfo.findByIdAndRemove({ _id: postID });
  res.status(200).send();
};
export const likePost = async (req, res) => {
  const { id: postID } = req.params;
  const post = await postInfo.findById({ _id: postID });
  const updatedPost = await postInfo.findByIdAndUpdate(
    { _id: postID },
    { likeCount: post.likeCount + 1 },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({ updatedPost });
};
