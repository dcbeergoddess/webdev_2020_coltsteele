# JAVASCRIPT | BOOLEAN LOGIC 

## Crucial 

### * Comparison Operators
### * Running JavaScript From a File
### * Conditionals: If, Else-If, and Else
### * Truth-y and False-y Values
### * Logical AND
### * Logical OR
### * Logical NOT
<br>

## Notes

<hr>

### Boolean Logic
- Decision Making in JavaScript
-   Concepts apply accros Programming Languages (Python, Ruby, Java, etc)
- **DECISION MAKING**: Having different outcomes based off certain criteria 

### Comparisons
- built in to JavaScript - Comparing two values | a left and a right
```js
//COMPARISON OPERATORS

  > // greater than
  < // less than
  >= // greater than or equal to
  <+ // less than or equal to
  == // equality
  != // not equal
  === // strict equality
  !== // strict non-equality
```

- **SOME EXAMPLES**
```js
//RETURN A BOOLEAN

  10 > 1; //true
  0.2 > 0.3; //false
  -10 < 0; //true
  50.5 < 0; //false
  0.5 <= 0.5; //true
  99 >= 4; //true
  99 >= 99; //true
  'a' < 'b'; //true
  'A' > 'a'; //false //based on unicode
```
- Thought it's UNCOMMON, YOU CAN compare STRINGS. Just be careful, things get dicey when dealing with case, special characters, and accents!
- Underlying numeric code | [UNICODE TABLE](https://unicode-table.com/en/#basic-latin)

#### EQUALITY | `==` vs `===`

- **`==`** | DOUBLE EQUALS
  - Checks for equality of VALUE, but NOT TYPE
  - It coerces both values to the same type and then compares them.
  - This can lead to some unexpected results!
  **weirdness**
  ```js
    5 == 5;         //true
    'b' == 'c';     //false
    7 == '7';       //true
    0 == '';        //true
    true == false;  //false
    0 == false;     //true
    null == undefined; //true
  ```

- **`===`** | TRIPLE EQUALS | STRICT EQUALITY and NON-EQUALITY
  - Checks for Equality of VALUE and TYPE
  - USE triple equals ALWAYS
  ```js
    5 === 5; //true
    1 === 2; //false
    2 === '2'; //false
    false === 0; //false

    //SAME APPLIES FOR != and !==
    10 != '10'; //false
    10 !== '10'; //true
  ```

### PRINT TO THE CONSOLE
- **console.log()** |
  - prints arguments to the console
    - we need this if we're going to start working with files!
- `console` | OBJECT | OTHER METHODS
  - `console.warn`
  - `console.error`

### ALERT & PROMPT
  - **alert()** | print out to user, not in console, pop-up | ANNOYING
  - **prompt()** | accept argument, pops up with input field | normal propduction uses form to get user input

### PARSE INTEGER
- **parseInt()** | accepts string value and parses it into a number
```js

  let userInput = prompt('please enter a number');
  //user enters 97
  //saved as string "97"
  userInput + 1 //"971"

  //instead
  parseInt(userInput) //97
  pareInt(userInput) + 1 //98

  parseInt("101") //101
  parseInt("101asdasdas") //101
```

### RUNNING CODE FROM A FILE 
- connect using `script` in head under title before `link`/stylesheets/etc.
- but usually want to put it at END of BODY (INSIDE BODY) if interacting with HTML
* **app.js**
```js
  //Put your code in the JS File
  alert('Hello from JS!');

  //Won't show up!!
  "h1".toUpperCase();

  //Will show up!
  console.log("h1".toUpperCase())
  ```

* **demo.html** 
```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>JS DEMO</title>
    <script src="app.js"></script>
  </head>
  <body>

  </body>
  </html>
```

### CONDITIONALS

- **MAKING DECISIONS** WITH CODE

* **IF STATEMENT**
- Only runs code `if` given conditional is `tue`
```js
  let rating = 3;

  if (rating === 3) {
    console.log("YOUR ARE A SUPERSTAR")
  }
```
* **ELSE IF**
- `if` not the first thing, maybe this other thing??
```js
  let rating = 2;

  if (rating === 3) {
    console.log("YOUR ARE A SUPERSTAR");
  } else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
  } 
```

* **ELSE**
- `if` nothing `else` is `true`, do this...
```js
  let rating = -99;

  if (rating === 3) {
    console.log("YOUR ARE A SUPERSTAR");
  } else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
  } else {
    console.log("INVALID RATING!");
  }
```
* **NESTING**
- We can next conditionals inside of conditionals
```js
  let password =  "cat dog";
  if (password.length >= 6) {
    if (password.indexOf(' ') !== 1) {
      console.log("Password cannot include spaces");
    } else {
      console.log("Valid password!!");
    }
  } else {
    console.log("Password to short!");
  }
```

### TRUTHY AND FALSY VALUES
- All JS values have an inherent truthy-ness or falsy-ness about them
- **Falsy Values**
  * false
  * 0
  * "" (empty string)
  * null
  * undefined
  * NaN
- **Truthy Values** EVERYTHING ELSE

### LOGICAL OPERATORS : && : || : !
- Combining Expressions

* **AND** : &&
- BOTH SIDES must be TRUE, for the ENTIRE thing to be TRUE
```js
  1 <= 4 && 'a' === 'a'; //true

  9 > 10 && 9 >= 9; //false

  'abc'.length === 3 && 1+1 === 4; //false
  'abc'.length === 3 && 2+2 === 4; //true

  let password = 'taco tuesday';
  if (password.length >= 6 && password.indexOf(' ') !== 1) {
      console.log("Valid password!!");
  } else {
    console.log("INVALID PASSWORD!");
  }
```

* **OR** : ||
- If ONE SIDE is TRUE, the ENTIRE thing is TRUE
```js
  //only one side needs to be true
  1 !== 1 || 10 === 10 //true
  10/2 === 5 || null // true
  0 || undefined //false

  let age = 76
  if(age < 6 || age >= 65){
    console.log('You get in for free!');
  } else {
    console.log('That will be $10 please');
  }
```

* **NOT** : !
- `!expression` returns `true` if expression is `false`
```js
  !null //true
  !(0 === 0 ) //false
  !(3 <= 4) //false
```
