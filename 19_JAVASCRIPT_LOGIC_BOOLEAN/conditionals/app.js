/*
console.log("Before Conditional")

let random = Math.random()

if (random < 0.5) {
  console.log("YOUR NUMBER IS LESS THAN 0.5");
} else {
  console.log("YOUR NUMBER IS GREATOR THAN 0.5")
} 
console.log(random)

console.log("After Conditional")

// if(random >= 0.5) {
//   console.log("YOUR NUMBER IS GREATOR THAN 0.5")
//   console.log(random)
// }

*/
/*
const dayOfWeek = prompt("enter a day").toLowerCase()

if(dayOfWeek === 'monday') {
  console.log("UGHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') {
  console.log("YAY I LOVE SATURDAYS")
} else if (dayOfWeek === 'friday') {
  console.log("Fridays are decent especially after work")
} else {
  console.log("MEH"); //Catch all but not great, you can type anything in prompt
}
*/

//0-5 - FREE
///5-10 - CHILD $10
//10-65 - ADULT $20
//65+ - SENIOR $10

/*
const age = 8;

if(age < 5) {
  console.log('you are a baby you get in for free')
} else if(age < 10) {
  console.log('you are a child you pay $10')
} else if(age < 65) {
  console.log('you are and adult you pay $20')
} else {
  console.log('your are a senior you pay $10') //CAN STILL ACCOUNT FOR NEGATIVE NUMBERS, DECIMALS, BIG NUMBERS
}
*/

//NESTING
//Password much include 6+ characters
//Password can not include spaces
const password = prompt("please enter a new password");

if (password.length >= 6) {
  //CHECK IF THERE IS A SPACE
  if (password.indexOf(' ') !== -1) {  //return -1 if space is not in password
    console.log("Password cannot include spaces"); 
  } else {
    console.log("Valid password!!");
  }
} else {
  console.log("Password to short. Must be 6+ characters!");
}
