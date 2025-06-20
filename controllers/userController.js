const User = require("../models/User");

exports.getUserProfile = async (req, res) => {
  if (req.user._id.toString() !== req.params.id)
    return res.status(403).json({ message: "Forbidden" });

  const user = await User.findById(req.params.id).select("-password");
  res.json(user);
};

exports.updateUserProfile = async (req, res) => {
  if (req.user._id.toString() !== req.params.id)
    return res.status(403).json({ message: "Forbidden" });

  const user = await User.findById(req.params.id);
  if (req.body.email) user.email = req.body.email;
  if (req.body.password) user.password = req.body.password;
  await user.save();
  res.json({ message: "Profile updated" });
};
