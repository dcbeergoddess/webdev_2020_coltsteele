//CONNECT TO DATABASE
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO ERROR!")
  console.log(err)
});

//DEFINE SCHEMA FOR USER
const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  //Let User Have One or More Addresses = array
  //In SQL this would have to be a different table to join
  addresses: [
    //This is america centric address
    {
      // _id: {id: false},
      street: String,
      city: String,
      state: String,
      country: String
    }
  ]
});

//MAKE THE MODEL
const User = mongoose.model('User', userSchema);

//MAKE NEW USER
const makeUser = async () => {
  const u = new User({ 
    first: 'Harry',
    last: 'Potter'
  })
  //push addresses into array in `u`
  u.addresses.push({
    street: '123 Sesame St.',
    city: 'New York',
    state: 'New York',
    country: 'USA'
  })
  const res = await u.save();
  console.log(res);
};

//FUNCTION TO ADD ADDRESSES
//It would expect an user `id` 
//findById and and pass in that `id`
//then set `user.addresses.push` --> second address we are pushing and we are awaiting that so `save()` it and save to variable so we can console.log(res) for learning :)
const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push(
    {
      street: '666 Hail Satan St.',
      city: 'New York',
      state: 'New York',
      country: 'USA'
    }
  )
  const res = await user.save();
};

// makeUser();
addAddress(`6070d8edb8a83e472a77f42a`)
