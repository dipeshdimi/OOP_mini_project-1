const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
      userId: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        max: 500,
      },
      img: {
        type: String,
      },
      likes: {
        type: Array,
        default: [],
      },
      post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
     }
    },
    { timestamps: true }
  );

module.exports = mongoose.model('Comment',CommentSchema);