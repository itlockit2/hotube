import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is requried"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
