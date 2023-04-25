const express = require("express");
const { protect } = require("../middleWare/authMiddleware");
const {
  sendMessage,
  allMessages,
} = require("../Controllers/messageController");

const router = express.Router();

router.route("/").post(sendMessage);
router.route("/:chatId").get(allMessages);

module.exports = router;
