const bcrypt = require('bcrypt');

/* PROMISE-FYD FORM OF BCRYPT HASH FUNCTION
const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};
*/

//SECOND HASHING FUNCTION EXAMPLE --> GENERATES SALT FOR YOU
const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};

//CHECK PASSWORDS
const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw)
  if(result) {
    console.log('LOGGED YOU IN SUCCESSFUL MATCH');
  } else {
    console.log('INCORRECT')
  }
}

// hashPassword('monkey');
login('monkey', '$2b$12$gooAoawVsV47Kq/UchWrNeNNTzHY3gBTB.mjwtKEp.WciLl6lwM8u');