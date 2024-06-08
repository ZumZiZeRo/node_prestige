const User = require('../models/userModel');

const signUp = async (req, res) => {
  const { firstName, lastName, phoneNumber, email } = req.body;

  try {
    const userFound = await User.findone({ email });
    if (userFound) {
      return res.status(400).json({ message: 'user already exists!' });
    }

    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
    });

    await newUser.save();

    // user is created and returned.
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'server error', error });
  }
};

module.exports = {
  signUp,
};
