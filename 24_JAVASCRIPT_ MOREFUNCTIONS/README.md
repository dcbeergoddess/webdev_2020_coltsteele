# SECTION

## Crucial 

### * Function Scope
### * Block Scope
### * Lexical Scope
### * Function Expressions
### * Higher Order Functions

<br>

## Important 

### * Returning Functions
### * The Keyword "this"
### * Adding Methods To Objects

<br>

## Notes

<hr>

### SCOPE
* Variable "visibility" 
  - The Location where a variable is defined dictates where we have access to that variable 

```js
 function collectEggs(){
  let totalEggs = 6;
  console.log(totalEggs)
}

collectEggs() //6
console.log(totalEggs) ///ERROR NOT DEFINED
```
- Variables defined withing a function are scoped to that function. 

### BLOCK SCOPE
- `let` and `const` are block scoped (old way with `var` was not blocked scope)
```js
//VARIABLES DECLARED INSIDE A BLOCK
  let radius = 8;
  if(radius > 0){
    const PI = 3.14159
    let msg = 'HIII!'
  }

  console.log(radius);
  console.log(PI); //ERROR PI NOT DEFINED //SCOPED TO THAT BLOCK

  //for loop EXAMPLE
  for(let i = 0; i < 5; i++){
    let msg = "ASDFASDFASDF"
    console.log(msg); //"ASDFASDFASDF"
  }

  console.log(msg); //ERROR NOT DEFINED
```

### LEXICAL SCOPE
- if we have an outer function and some inner function defined inside of it, outer() if ran would be undefined, an inner function nested inside a parent function has access to the variables in that scope

```js
  function outer(){
    let hero = "Black Panther";

    function inner(){
      let cryForHelp = `${hero}, please save me!`
      console.log(cryForHelp)
    }
    inner();
  }
```

### FUNCTION EXPRESSIONS
- Defining Functions in an Expression | Store it in a variable
- other way is a FUNCTION STATEMENT
- FUNCTIONS ARE OBJECTS BEHIND THE SCENES 
```js
  const square = function (num){
    return num * num;
  }
  square(7); //49
```

### HIGHER ORDER FUNCTIONS
- Functions that an operate on/with other functions.
  - They can:
    * Accept other functions as arguments
    * Return a function

**FUNCTIONS AS ARGUMENTS**    
```js
  function callTwice(){
    func();
    func();
  }

  function laugh(){
    console.log('HAHAHAHAHAHAHAHAHAH')
  }

  callTwice(laugh); // pass a functions as a arg!
  //'HAHAHAHAHAHAHAHAHAH'
  //'HAHAHAHAHAHAHAHAHAH'
```
**RETURN FUNCTION AS VALUE**

```js
  function makeBetweenFun(min, max){
    return function (val){
      return val >= min && val <= max; 
    }
  }

  const inAgeRange = makeBetweenFunc(18, 100)
  inAgeRange(17); //false
  inAgeRange(68); //true
```

### Methods
- We can add functions as properties on objects!
- We can them `methods` - every method is a function, but not every function is a method!
```js
  const math = {
    multiply : function(x, y) {
      return x + y;
    },
    divide : function(x, y) {
      return x / y;
    },
    square : function(x) {
      return x * x;
    }
  }
```
**NEW SHORTHAND**
- We do this so often that there's a new shorthand way of adding methods. 
```js
  const math = {
    blah: 'hi',
    add(x, y){
      return x + y;
    },
    multiply(x, y){
      return x * y;
    }
  }
  math.add(50, 60) //110
```

### `THIS` IN METHODS
- Use the keyword to access other properties on the same object
- The value of `this` depends on the **_invocation context_** of the function it is used in. 
```js
  const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName(){
      return `${this.first} ${this.last}`
    }
  }

  person.fullName(); //"Robert Herjavec"
  person.last = 'Plant';
  person.fullName(); //"Robert Plant"

  const func = person.fullName;
  func() //"undefined, undefine"
  //cannot access `this`
```

### TRY AND CATCH
- Catching errors and preventing them from stopping the execution of our code
- Grab the error and stop it from crashing everything 
- will become super import for API CALLS, AJAX, ASYNC, AWAIT, etc. | API COULD BE DOWN, ETC.
```js
  //wrap in try statement
try {
    hello.toUpperCase
  } catch { //block of code that will run if error thrown
    console.log("ERROR")
  }

  console.log("AFTER")

```