import User from "../models/user.models.js";

export const getUSer = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });

  const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

  res.status(200).json(detailsWithoutPassword);
};
