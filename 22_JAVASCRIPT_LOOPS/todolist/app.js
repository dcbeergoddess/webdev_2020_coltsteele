const todos = ["add one todo"]

let userInput = prompt("What would you like to do?").toLowerCase();

//While Loop(ask for input while the result it's not equal to quit, loop)
//store with array
//remove from array, use splice

while(userInput !== "quit" && userInput !== "q"){
  if(userInput === "new"){
    //use const here because not going to change
    const newTodo = prompt("Enter your todo");
    todos.push(newTodo);
    console.log(`"${newTodo}" added to the list`);
  } else if(userInput === "list"){
    console.log("*****************")
    for(let i = 0; i < todos.length; i++){
      console.log(`${i}: ${todos[i]}\n`);
    }
    console.log("*****************")
  } else if(userInput === "delete"){
    const deleteTodo = parseInt(prompt("Enter index to delete"));
    //Check to make sure it is Nan
    if(!Number.isNaN(deleteTodo)){
      const deleted = todos.splice(deleteTodo, 1)
      console.log(`You deleted "${deleted[0]}"!`);
    } else {
      console.log("Unkown index")
    }
   
  } else {
    console.log("Not a Valid Input!")
  }
  //Originally had at top but then we got double prompt, needed to put after conditional statements
  userInput = prompt("What would you like to do?").toLowerCase();
}
console.log("you quit the app!")

