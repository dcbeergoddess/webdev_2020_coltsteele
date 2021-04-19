const bcrypt = require('bcrypt');

//PROMISE-FYD FORM OF BCRYPT HASH FUNCTION
const hashPassword = async () => {
  const salt = await bcrypt.genSalt(10);
  console.log(salt);
};

hashPassword();