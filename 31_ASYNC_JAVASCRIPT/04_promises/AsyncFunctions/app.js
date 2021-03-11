//FUNCTION DECLARATION
const sing = async () => {
  return `LA LA LA LA`
}; 

sing().then((data) => {
  console.log("Promise Resolved With:", data)
});

const sing1 = async () => {
  throw "oh, no problem"
  return 'LA LA AL AL'
}

sing1()
  .then((data) => {
    console.log("Promise Resolved With:", data)
  })
  .catch((err) => {
    console.log("OH NO, Promise REJECTED!")
    console.log(err)
  })

  // MORE COMPLICATED FUNCTION

  const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials"
    if (password === 'corgifeetarecute') return "WELCOME"
    throw "Invalid Password"
  }

  login('asfdasdf')
    .then(msg => {
      console.log("Logged In!")
      console.log(msg)
    })
    .catch(err => {
      console.log('Error!')
      console.log(err)
    })

    login('asfdasdf', "corgi")
    .then(msg => {
      console.log("Logged In!")
      console.log(msg)
    })
    .catch(err => {
      console.log('Error!')
      console.log(err)
    })

    login('asfdasdf', "corgifeetarecute")
    .then(msg => {
      console.log("Logged In!")
      console.log(msg)
    })
    .catch(err => {
      console.log('Error!')
      console.log(err)
    })

    // ==============RAINBOW=========================== //
        // COLOR CHANGE CODE WITH PROMISE
    const delayedColorChange = (color, delay) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          document.body.style.backgroundColor = color;
          resolve();
        }, delay)
      })
    }

    async function rainbow() {
      await delayedColorChange('red', 1000)
      console.log("red")
      await delayedColorChange('orange', 1000)
      console.log("orange")
      await delayedColorChange('yellow', 1000)
      console.log("yellow")
      await delayedColorChange('green', 1000)
      console.log("green")
      await delayedColorChange('blue', 1000)
      console.log("blue")
      await delayedColorChange('indigo', 1000)
      console.log("indigo")
      await delayedColorChange('violet', 1000)
      console.log("violet")
      return "ALL DONE!"
    }

    // rainbow().then(() => console.log("END OF RAINBOW"))
    // OR

    async function printRainbow() {
      await rainbow();
      console.log('END OF RAINBOW')
    }

    printRainbow();


    const fakeRequest = (url) => {
      return new Promise((resolve, reject) => {
          const delay = Math.floor(Math.random() * (4500)) + 500;
          setTimeout(() => {
              if (delay > 4000) {
                  reject('Connection Timeout :(')
              } else {
                  resolve(`Here is your fake data from ${url}`)
              }
          }, delay)
      })
    }

    async function makeTwoRequests() {
      try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2)
      } catch(e) {
        console.log('Caught an error');
        console.log("error is:", e)
      }

    }

    makeTwoRequests();
  