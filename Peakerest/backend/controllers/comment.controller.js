import Comment from "../models/comment.models.js";
import User from "../models/user.models.js";

export const getPostComments = async (req, res) => {
  const { postId } = req.params;
  const comments = await Comment.find({ pin: postId })
    .populate("user", "username img displayName")
    .sort({ createAt: -1 });

  res.status(200).json(comments);
};
