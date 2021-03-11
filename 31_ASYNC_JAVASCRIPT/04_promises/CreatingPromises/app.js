// Make NEW PROMISE ==> Pass in Function (2 params, res and err)

// new Promise((resolve, reject) => {
//   // pending until resolve or reject is called

// })

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve('YOUR FAKE DATA HERE');
      }
      reject('Request ERROR!');
    }, 1000)
  })
}

fakeRequest('/dogs/1')
  .then((data) => {
    console.log('Done with Request');
    console.log('data is:', data);
  })
  .catch((err) => {
    console.log('oh no!',  err)
  })

  // COLOR CHANGE CODE WITH PROMISE
  const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.body.style.backgroundColor = color;
        resolve();
      }, delay)
    })
  }
// DON'T NEED REJECT OR ERROR IN THIS CASE, NOT DEALING WITH DATA FROM THIRD PARTY, ETC.
  delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))

  
 
