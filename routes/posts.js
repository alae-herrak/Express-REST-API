const express = require("express");
const router = express.Router();

const {
  createPost,
  deletePostById,
  getPost,
  getPostById,
  updatePost,
} = require("../controllers/post.js");

router.post("/", createPost);
router.get("/", getPost);
router.get("/:postId", getPostById);
router.delete("/:postId", deletePostById);
router.patch("/:postId", updatePost);

module.exports = router;
