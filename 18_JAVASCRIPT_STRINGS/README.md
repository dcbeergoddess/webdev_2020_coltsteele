# JavaScript Strings

## Crucial 

### * String Basics
### * Indices and Length
### * Undefined & Null
### * String Methods
### * String Template Literals

<br>

## Important 

### * Random Numbers and the Math Object

<br>

## Notes

<hr>

### Strings
- **"Strings of Characters"**
- Strings are another primitive type in JavaScript. They represent text, and must be wrapped in quotes.
- be consistent in your codebase with quotes

```js
let firstName = "Ziggy"; //Double quotes work

let msg = "Please do not feed the chimps"; //long strings

let animal = 'Dumbo Octopus' //So do single quotes

let phrase = "I told her 'go away'" 
let phrase2 = 'She said "I hate you"' //Quotes in Quotes

//THIS DOES NOT WORK/
let bad = "this is wrong'; //ERROR
```

### STRING ARE INDEXED
```js
  // Each character has a corresponding index (a positional number), starting at `0`
  let animal = "chicken";
              //0123456
  animal[3] //c

  let animal = "Dumbo Octopus"; //space counts 
  animal[6] //O
  animal[99] //undefined

  let phone = "(231)345-1344" 
  //write logic to check if first character = "("

  //Built in Magical PROPERTY 'length'
  animal.length //13 
  //not highest index
  //always one less than the highest index

  //Concatenation 
  "lol" + "lol" //"lollol"

  //Can not update one character at a time in a string
  //Can just overwrite entire string
  let firstName = "River";
  let lastName = "Pheonix":

  let fullName = firstName + "" + lastName
  //River Phoenix

  //JavaScript will coerce these to a common type
  let result = 1 + "h1"; //"1h1!
  typeof(result) // "string"
  typeof(1) //"number" 

  let year = "1998";
  year + 1; //"19981"

```

### String Methods
- **Methods** are built-in actions we can perform with INDIVIDUAL STRINGS
  * Searching within a string
  * Replacing part of a string
  * Changing the casing of a string

- [MDN STRING DOCUMENTATION](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  * List of Methods

- **SYNTAX** : `thing.method()`

* **CASING**
```js
  let msg = 'I am king';
  let yellMsg = msg.toUpperCase(); // 'I A KING'

  let angry = 'LeAvE mE aLoNe!';
  angry.toLowerCase(); //'leave me alone!'

  //the value in angry is unchanged 
  angry; //'LeAvE mE aLoNe!'
```

* **Trim** : Trim off any `white space` at the beg or end/get to core of string
```js
  let greeting = '    leave me alone plz      ';
  greeting.trim() //'leave me alone plz'

  let greeting = " hellow again!!!     ";
  greeting.trm().toUppcerCase() // "HELLO AGAIN"
  //CHAIN METHODS TOGETHER
```

- **WITH ARGUMENTS** : `thing.method(arg)`
  - Arguments are inputs we can pass into the method to alter how they behave
  - Some methods accept `arguments` that modify their behavior. Think of them as `inputs` that we can pass in.
  - We pass these arguments inside of parentheses

  * **indexOf** : give us a positional number where a given argument occurs in a string
  - can help you figure out if a string contain something specific
  ```js
    let tvShow = 'catdog';

    tvShow.indexOf('cat') //0
    tvShow.indexOf('dog') //3
    tvShow.indexOf('z') //-1 (not found)
  ```
    * **slice** : extracts a section of a string and returns it as a new string, without modifying the original string.
      - `str.slice(beginIndex[, endIndex])` : beginIndex = where to start extraction | endIndex = up until but not included | can have just beginIndex
      - negative numbers will work backwards from the end
  ```js
    let str = 'supercalifagilisticexpialidocious';

    str.slice(0,5); //'super'
    str.slice(5); //califagilisticexpialidocious'
  ```
      * **replace** | A LOT MORE POWERFUL THAN THIS | can use `regular expression` to match patterns and replace a pattern instead of a specific string 
  ```js
    let annoyingLaugh = 'teehee so funny! teehee!';

    annoyingLaugh.replace('teehee', 'haha'); //'haha so funny! teehee!1
    //ONLY REPLACE FIRST MATCHING INSTANCE | replaceALL not recognized by most browsers
    //indexOf also will only find the FIRST OCCURRENCE 
  ```
    * **repeat** | pass in how many time you want to repeat
  ```js
    "lol".repeat(2) //"lollol"
    //original string unchanged 
  ```
    * **concat**

  
  ### TEMPLATE LITERALS 
  - `Template literals` are `string literals` allowing embedded expressions. Which will be evaluated and then turned into a resulting string

  ```js
    //EXAMPLE
    let example = `I counted ${3 + 4} sheep`; //I counted 7 sheep
    //WE USE BACK-TICKS NOT SINGLE QUOTES
    // ${INSIDE EVALUATED AS EXPRESSION}

    //To escape a backtick in a template literal, put a backslash (\) before the backtick.
    `\`` === '`' // --> true

    let product = 'Artichoke';
    let price = 2.25;
    let qty = 5;

    //OLD WAY
    let totalMsg = "You bought " + qty + "" + product + ". Total is: " + price * qty;
    //"You bought 5 Artichoke. Total is: 11.25"  
  
    //TEMPLATE LITERAL
    let totalMsg = `You Bought ${qty} ${product.toUpperCase()}. Total is: ${price * qty}`
    //"You bought 5 ARTICHOKE. Total is: 11.25"
  ```

  - S T R I N G E S C A P E S
       * \n - newline
      * \' - single quote
      *  \" - double quote
       * \\ - backslash

### Null & Undefined | Primit
* **Null**
  - "Intentional absence of any value"
  - Must be assigned
  ```js
    // No One is Logged in Yet...
    let loggedInUser = null; //value is explicitly nothing

    // A user logs in.
    loggedInUser = 'Alan Rickman';
  ```
* **Undefined**
  - Variables that do not have an assigned value are undefined
  ```js
  let pickles; //We didn't assign a value
  pickles; //undefined
  pickles = 'are very gross';

  //Undefined also comes up in other situations:
  let food = 'tacos';
  food[7]; //undefined 
  ```

  ### Math Object
  - Contains `properties` and methods for `mathematical constants` and `functions`
  - [MDN MATH REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
  ```js
  Math.PI // 3.14

  //Rounding a number:
  Math.round(4.9) //5

  //Absolute value:
  Math.abs(-456) //456

  //Raises 2 to the 5th power:
  Math.pow(2,5) //32

  //Removes Decimal
  Math.floor(3.9999) //3
  ```

  * **RANDOM NUMBERS**
  - Math.random() gives us a random decimal number between 0 and 1 (non-inclusive)
  ```js
    Math.random()
    //0.1234981729058123
    Math.random()
    //0.0871982356112344
    Math.random()
    //0.9081723864125073
  ```
  * **RANDOM INTEGERS**
  ```js
    //GENERATE RANDOM NUMBERS BETWEEN 1 AND 10
    const step1 = Math.random();
    //0.5198274182741987240
    const step2 = step1 * 10;
    //5.198274182741987240
    const step3 = Math.floor(step2); //GET NUMBERS FROM 0-9
    //5
    const step4 = step3 + 1 //SHIFT EVERYTHING UP TO GET 1-10
    //6

    Math.floor(Math.random() * 10) + 1;

  ```
















