const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, requried: true, unique: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
