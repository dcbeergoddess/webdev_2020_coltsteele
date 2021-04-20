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
//static method for validation on User Login
userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, foundUser.password);
  //if isValid is true return found user otherwise return false --> ternary operator
  return isValid ? foundUser : false;
};
//bcrypt middleware
userSchema.pre('save', async function (next) {
  //`this` refers to this particular instance of user
  //`isModified` will tell us true or false if password has been modified on this particular user model
  //if password is unchanged call next otherwise hash password
  if(!this.isModified('password')) return next(); 
  this.password = await bcrypt.hash(this.password, 12)
  next(); //this will can save()
});

module.exports = mongoose.model('User', userSchema);