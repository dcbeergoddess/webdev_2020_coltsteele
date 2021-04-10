const mongoose = require('mongoose');
const { Schema } = mongoose;

//CONNECT TO DATABASE
mongoose.connect('mongodb://localhost:27017/relationshipDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO ERROR!")
  console.log(err)
});

//USER MODEL - Parent - one
const userSchema = new Schema({
  username: String,
  age: Number
});

//TWEET MODEL - Child - to many
const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

//ADD TWEETS TO USER
/* EXAMPLE 1
const makeTweets = async () => {
  const user = new User({ username: 'chickenfan99', age: 61 });
  const tweet1 = new Tweet({ text: 'omg I love my chicken family', likes: 0 })
  tweet1.user = user; //associates the two
  user.save();
  tweet1.save();
};

makeTweets();
*/

/* EXAMPLE 2
const makeTweets = async () => {
  const user = await User.findOne({ username: 'chickenfan99' })
  const tweet2 = new Tweet({ text: 'chickens!!!!!!!!!', likes: 5 })
  tweet2.user = user; //associates the two
  tweet2.save();
};

makeTweets();
*/


//Query Database to find Tweets
/* EXAMPLE 1
const findTweet = async () => {
  //find first available tweet
  const t = await Tweet.findOne({});
  console.log(t);
};

findTweet();
*/

/* Example 2 w/ Populate
const findTweet = async () => {
  //find first available tweet
  const t = await Tweet.findOne({}).populate('user');
  console.log(t);
};

findTweet();
*/

/* Example 3 --> Populate certain fields
const findTweet = async () => {
  //find first available tweet
  const t = await Tweet.findOne({}).populate('user', 'username');
  console.log(t);
};

findTweet();
*/

// Example 4 --> Find All 
const findTweet = async () => {
  //find first available tweet
  const t = await Tweet.find({}).populate('user');
  console.log(t);
};

findTweet();