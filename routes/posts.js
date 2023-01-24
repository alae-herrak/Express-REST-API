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
router.get("/:userId", getPostById);
router.delete("/:userId", deletePostById);
router.patch("/:userId", updatePost);

module.exports = router;
