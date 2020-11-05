//When user Submit forms, run some basic code, listen for a form submission

//SELECT FORM
const tweetForm = document.querySelector('#tweetForm')
//SELECT UL TO APPEND NEWTWEET
const tweetsContainer = document.querySelector('#tweets')

tweetForm.addEventListener('submit', (e) => {
  e.preventDefault(); //stop request, and default behavior!!!
  // const usernameInput = document.querySelectorAll('input')[0]
  // const tweetInput = document.querySelectorAll('input')[1]

  //BETTER WAY TO GRAB THE INFO
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  //CLEAR INPUT FIELDS
  usernameInput.value = '';
  tweetInput.value = '';
  // console.log("submitted");
})

//append new tweets as lis to ul element
const addTweet = (username, tweet) => {
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(username)
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`)
  console.log(newTweet)
  tweetsContainer.append(newTweet)
}