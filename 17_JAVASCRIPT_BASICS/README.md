# JavaScript

## Crucial 

### * Understanding the Role of JavaScript
### * JavaScript Numbers
### * Variables & Let
### * Const
### * Booleans
### * Variable Naming
### * 

<br>

## Notes

<hr>

### JavaScript | JS
- LOGIC HEAVY
- [CODEPEN AIRPLANE EXAMPLE](https://codepen.io/ste-vg/details/GRooLza)
- [CODEPEN AFRICA MAP QUIZ](https://codepen.io/ktich/full/ExVmYGr)

### Primitive Types
- The Basic Building Blocks
1. Number
2. String
3. Boolean
4. Null
5. Undefined

* _Technically there are two others: `Symbol` and `BigInt` 

```js
  // Numbers:
  1;
  -99;
  0.345345;

  //Strings
  "Hello World" //one string, multiple words
  "43" //numbers

  //Making variables with let:
  let numberOfFriends = 1;

  //Incrementing:
  numberOfFriends += 3; //numberOfFriends is now 4

  // Variables with const
  const minimumAge = 21; //CANNOT REASSIGN!

  //Booleans - true or false values
  true;
  false;
  let isHappy = true;

  //Naming Conventions
  // Use upper camel-cased names:
  let numberOfChickens = 6; //GOOD
  // NOT THE JS WAY:
  // let number_of_chickens = 6;
```

### Working in the CHROME Console
- MAC SHORTCUT - Command + Option + J
- R E P L : Read, Evaluate, Print, Loop
  - When interacting with console and writing code this is the console process

### Numbers
- JS has one number type (some languages have two)
  - Positive numbers
  - Negative numbers
  - Whole numbers (integers)
  - Decimal numbers

```js
//Numbers
 1;
-99;
0.345345;

//we can do some math
99-1 //89
4 + 10 //14
1/5 //0.2
11111 * 7 //77777

//Modulo - remainder operator
10 % 3 //1
24 % 2 //0
15 % 11 //4 

//Exponentiation Operator - raise to the nth power
2 ** 4 //16
```
- **Modulo** - takes the second number and divide it into the first as many time as it goes into the whole number and take the remainder. 
- **PEMDAS** | Order of Operations | parentheses, exponents, multiplication, division, addition, subtraction

- **Exponentiation Operator** - `**` raise some number the nth power


### Nan
- Not a Number but is a number type/part of number family
- NaN is numeric value that represents something that is... not a number
```js
0/0 //Nan
1 + NaN //Nan
/////////////////////
typeof(NaN) //"number"
```

### Variables 
- are like labels for values
  - We can store a value and give it a name so that we can:
    * Refer back to it later/recall it
    * Use that value to do... stuff
    * Or change it later on
  
```js
  //BASIC SYNTAX
  let someName = value;

  //make me a variable called 'year' and give it the value of `1985`
  let year = 1985;
```

### Updating Variables
```js
  let score = 0;
  //lake current score and set it equal to + 5
  score += 5 //5
  score -= 5 //0

  score-- //decrement by 1
  score++ //increment by 1
```

### Const & Var

- **CONST**
  - `const` works just like `let`, except you CANNOT change the value
  - blocked scope | like `let`
  - once we cover Arrays & Objects, we'll see other uses where `const` make sense over `let`
  ```js
  const hens = 4;
  hens = 20; //ERROR!

  const age = 17;
  age = age + 1; //ERROR!

  //WHY USE?
  const pi = 3.14159;
  const daysInWeek = 7;
  const minHeightForRide = 60;
  ```

- **VAR**
  - THE OLD VARIABLE KEYWORD
    - scoped to variable's enclosing function or the global scope (scoped to "current execution context")
    - similar to let | can be reassigned
    - global variables are added to window
    - not blocked scope

### Booleans
- only 2 options, no quotes, no numbers
- `true` & `false`
- important role in performing logic
```js
  let isActiveGame = true;
  isActiveGame = false;

  let isLoggedIn = false;
```
_**VARIABLES CAN CHANGE TYPES**_
```js
let numPuppies = 2; //Number
numPuppies = false; //Now a Boolean
numPuppies = 100; //Back to Number!
```

### NAMING OUR VARIABLES
- Rules for identifiers 
  - can not have spaces
  - can not start with digit, but can have numeric character in name
- Convention/Best Practices
  - camelCase
  - snake_case (valid but camelCase more common)

- COME UP WITH GOOD NAMES!!!! Meaningful is better than concise names

- Boolean: `let isGameOver = true` instead of just `let gameOver = true`



























