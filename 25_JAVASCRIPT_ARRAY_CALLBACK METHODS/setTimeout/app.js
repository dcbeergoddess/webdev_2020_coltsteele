console.log('*****setTimeout*****')

console.log('Hello!...')

setTimeout(() => {
  console.log("...are you still there")
}, 3000); // 3 seconds

//THESE BOTH PRINT BEFORE 
console.log('After TimeoutFunction');
console.log('*************************');

console.log('*****setInterval*****')
const id = setInterval(() => {
  console.log(Math.random())
}, 2000); //Every two seconds print random number between 0-1

// clearInterval(id); 
//STOPS INTERVAL, ATTACH IT TO IT's ID, EVERY SET INTERVAL IS GIVEN AND ID, SAVE IT TO VARIABLE TO REFERENCE FOR clearInterval()
