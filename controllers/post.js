const Post = require("../models/Post");

//create a new user

const createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    createdAt: req.body.createdAt,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

// get all users

const getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
};

//get a user by id

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
};

//delete a user by id

const deletePostById = async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

//update a user

const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          createdAt: req.body.createdAt,
        },
      }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  createPost,
  deletePostById,
  getPost,
  getPostById,
  updatePost,
};
