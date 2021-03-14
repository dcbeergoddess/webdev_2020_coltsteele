const args = process.argv.slice(2) //take out first two elements
for(let arg of args){
  console.log(`Hi, there, ${arg}`)
}


// TYPE `node greeter.js jade samson` in terminal