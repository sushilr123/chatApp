const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    members: {
        type:[ { type: mongoose.Schema.Types.ObjectId,
        ref: "User",    
        required: true}
    ]
    },
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messages",
    },
    unreadmessages: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});
const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;