# SECTION

## Crucial 

### * Defining Functions
### * Working With Arguments
### * Function Return Values
### * Function Exercises

<br>

## Notes

<hr>

### Javascript Functions
- REUSABLE PROCEDURES
- Function allow us to write reusable, modular code
- We define a "chunk" of code that we can then execute at a later point
- We use them ALL THE TIME!
- Every `method` is a `function`

### Defining Functions
- 2 STEP PROCESS
  1. Define | Tell Javascript about it
  2. Run | Can run it as many times as you want

**DEFINE**
- This is one way ---- arrow functions will come!
```js
  function funcName(){
    //do something
  }

  //Arrow Function (Anonymous Function....)

  () => {

  }

  function grumpus(){
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!')
  }
```
**RUN**
```js
  funcName(); //run once

  funcName(); //run again!

  grumpus();
  // ugh...you again...
  //for the last time...
  //LEAVE ME ALONE!...

  grumpus();
  // ugh...you again...
  //for the last time...
  //LEAVE ME ALONE!...
```
**HOISTING**
- run a function in the code before you define the function. will work but not best practice. wonky feature of Javascript. 
**ARGUMENTS**
- INPUTS | Right now, our simple functions accepts zero inputs. They behave the same way every time!
- We can write functions that accept inputs, called `arguments`
```js
  function greet(person){
    console.log(`Hi, ${person}`);
  }

  greet('Arya') //Hi, Arya
  greet('Ned') //Hi, Ned
```
**2 Arguements**
```js
  function findLargest(x, y){
    if(x > y){
      console.log(`${x} is larger!`)
    } else if (x < y){
      console.log(`${y} is larger!`) {
        else {
          console.log(`${x} and ${y} are equal`)
        }
      }
    }
  }
```
**Return**
- Built-in methods `return` values when we call them. We can store those values:
```js
  const yell = "I will end you".toupperCase();
  yell; //"I will end you"

  const idx = ['a', 'b', 'c',].indexOf('c')
  idx; //2
```

- The `return` statement ends function execution and && specifies the value to be returned by that function 

**NO RETURN**
```js
  function add(x, y) {
    console.log(x + y) 
  }

  const sum = add(10, 16) 
  sum; //undefined
```
**FIRST RETURN**
- Now we can capture a return value in a variable!
- Return is how we get values out of a function so we can save them and capture them
```js 
  function add(x, y){
    return x + y; //RETURN!
  }

  const sum = add(10, 16);
  sum; //26

  const answer = add(100, 200);
  answer; //300
```


