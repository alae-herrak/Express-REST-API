const express = require("express");
const router = express.Router();

const {
  createUser,
  deleteUserById,
  getUser,
  getUserById,
  updateUser,
} = require("../controllers/user.js");

router.post("/", createUser);
router.get("/", getUser);
router.get("/:userId", getUserById);
router.delete("/:userId", deleteUserById);
router.patch("/:userId", updateUser);

module.exports = router;
