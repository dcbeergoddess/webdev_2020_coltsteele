// const lis = document.querySelectorAll('li');

// for(let li of lis){
//   li.addEventListener('click', () => {
//     li.remove();
//   })
// }

//SELECT FORM
const tweetForm = document.querySelector('#tweetForm')
//SELECT UL TO APPEND NEWTWEET
const tweetsContainer = document.querySelector('#tweets')


tweetForm.addEventListener('submit', (e) => {
  e.preventDefault(); //stop request, and default 
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  //CLEAR INPUT FIELDS
  usernameInput.value = '';
  tweetInput.value = '';
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

tweetsContainer.addEventListener('click', (e) => {
  console.log('click on ul');
  console.log(e);
  console.dir(e.target)
  //check to make sure what you clicked an li
  //e.target is what is clicked if li then remove
  e.target.nodeName === 'LI' && e.target.remove();
  
})