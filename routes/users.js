const express = require("express");
const router = express.Router();

import { createUser, deleteUserById, getUser, getUserById, updateUser } from "../controllers/user.js";

router.post("/", createUser);
router.get("/", getUser);
router.get("/:userId",getUserById);
router.delete("/:userId", deleteUserById);
router.patch("/:userId", updateUser);

module.exports = router;
