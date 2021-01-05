# ASYNC JAVASCRIPT

## Crucial 

### * Working with Promises
### * Async Functions

<br>

## Important 

### * The Call Stack
### * Callback Hell


<br>

## Nice to Have

### * Understanding WebAPI's
### * Creating Our own Promises


<br>

## Notes

<hr>

### The Call Stack
**mechanism JavaScript uses behind the scenes**

- The mechanism the JS interpreter uses to keep track of its place in a scrip that calls multiple functions.
- How JS "knows" what function is currently being run and what functions are called from withing that function, etc.
- Think of it as marking your place in a book when you flip back to an appendix, etc.

#### **STACK**
- Data Structure 
- arrays
- push, pop, shift, unshift

- A Stack is a basic data structure in computer science
- A LAST IN... FIRST OUT
- LIFO - Data Structure - Remove the thing that was added most recently first

#### **HOW IT WORKS**
- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out that function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

```js
  const multiply = (x, y) => x * y;
  
  const square = (x) => multiply(x, x);

  const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
  };

  isRightTriangle(3, 4, 5)

  //isRightTriangle(3,4,5)
  //square(3) + square(4) 
  //=== square(5)
```
- Above isRightTriangle is calling square and square calls multiply
- Stacked on top of each other
- once it is evaluated it is removed from stack
- then it goes back up again and repeats for all squares
- now you have all the numbers and final math can happen

- JavaScript adds Function Calls to the CallStack and removes them whenever a value is returned.

- [LOUPE Call Stack Visual](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoeCx5KSB7CiAgICByZXR1cm4geCAqIHk7Cn0KCmZ1bmN0aW9uIHNxdWFyZSh4KSB7CiAgICByZXR1cm4gbXVsdGlwbHkoeCx4KTsKfQoKZnVuY3Rpb24gaXNSaWdodFRyaWFuZ2xlKGEsYixjKXsKICAgIHJldHVybiBzcXVhcmUoYSkgKyBzcXVhcmUoYikgPT09IHNxdWFyZShjKTsKfQoKaXNSaWdodFRyaWFuZ2xlKDMsNCw1KQ%3D%3D!!!)

- USING THE CHROME DEV TOOLS OPEN UP callstack Exercise and look under SOURCES, under page look under app.js, Apply breakpoint by clicking line, stops the codes execution and inspect one varialbe at a time.
- 




