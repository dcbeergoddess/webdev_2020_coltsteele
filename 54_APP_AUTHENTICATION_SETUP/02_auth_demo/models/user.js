const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username Cannot Be Blank!']
  },
  password: {
    type: String,
    required: [true, 'Password Cannot Be Blank!']
  }
});

userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, foundUser.password);
  //if isValid is true return found user otherwise return false --> ternary operator
  return isValid ? foundUser : false;
}

module.exports = mongoose.model('User', userSchema);