const bcrypt = require('bcrypt');

//PROMISE-FYD FORM OF BCRYPT HASH FUNCTION
const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
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
login('monkey', '$2b$12$eNQG7MNRQwiT58AZMcD6AeTM6azA5t2y.z6AmiXcF/k9UKrp8gcPi');