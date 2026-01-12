const router = require("express").Router();
const Chat = require("../models/chat");
const authMiddleware = require("../middlewares/authmiddleware");

// Create a new chat
router.post("/create-new-chat", authMiddleware, async (req, res) => {
  try {
      const chat = new Chat(req.body);
      const savedChat =await chat.save();
      res.status(201).send({
        message: 'chat created successfully',
        success:true,
        data:savedChat
      })
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/get-all-chats", authMiddleware, async (req, res) => {
  try {
    const allchats = await Chat.find({
      members: { $in: req.body.userId },
    });

    
    res.status(201).send({
      message: "chat created successfully",
      success: true,
      data: allchats,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;
