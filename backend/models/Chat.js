const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Session',
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Chat', chatSchema);
