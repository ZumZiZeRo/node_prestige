const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ message: 'server error', error });
  }
};

module.exports = {
  getAllUsers,
};
