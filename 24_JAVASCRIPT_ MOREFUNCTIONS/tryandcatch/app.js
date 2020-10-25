//wrap in try statement
try {
  hello.toUpperCase
} catch { //block of code that will run if error thrown
  console.log("ERROR")
}

console.log("AFTER")

console.log("**********")
console.log("Try and Catch")
console.log("**********")

function yell(msg){
  try {
  console.log(msg.toUpperCase().repeat(3));
  } catch (e){
    console.log(e)
    console.log("please pass a string")
  }
}

yell(1)
yell("hello")



