# PROTOTYPES, CLASSES, & OOP

## Crucial 

### * Object Prototypes (the concept)
### * Defining Classes
### * Extends & Super

<br>

## Important 

### * The "new" keyword (the 4 things it does)

<br>

## Nice to Have

### * Defining Constructor Functions (the "old" way)
### * Converting Colors & Associated Crazy Math - StackOverFlow

<br>

## Notes

<hr>

### What On Earth Are Prototypes
- `OBJECT PROTOTYPES`: the mechanism by with JS objects inherit features from on another 
```js
//ARRAY
  length: 0
  >__proto__: Array(0)
```
- Objects can have a prototype object which acts as a `template object`: Typically contain a bunch of methods 
- [MDN object prototypes doc](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- Certain methods attached to Array. If define new method not inherited it will show up in the array
![ARRAY PROTOTYPES](assets/prototypes.png)
- `String.prototype`
- `Array.prototype`
```js
  //Add prototype method to string
  String.prototype.grumpus = () => alert("GO AWAY"!)
```
[PROTOTYPE CODE ALONG](01_prototypes/app.js)

- `__proto__` = Reference to the object `String.prototype` or `Array.prototype`

### Intro to Object Oriented Programming
- [MDN OOP for Beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- Organizing our code, Designing and Structuring our applications by breaking things up into distinct patterns of objects
- Create application to convert colors
![EXAMPLE OF USING CLASSES - COLOR](assets/color.png)
- FOR EXAMPLE: `XHR`: Making `new` `XMLHttpRequest` (you are creating a new object that inherits the properties and methods in `XMLHttpRequest`) - h1 - object template

### Factory Functions
- [FACTORY FUNCTION CODE ALONG](02_factory_functions/app.js)
- Makes us an object and returns it at the end so we can use it
- THIS PATTERN NOT AS COMMONLY USED
- methods are defined to each new color object created
` black.hex === firstColor.hex`: `false`
- vs. strings and protype methods
`"hello".slice === "bye".slice`: `true`

### Constructor Functions
- [CONSTRUCTOR FUNCTION CODE ALONG](03_constructor_functions/app.js)
- `new` Keyword | OPERATOR | Create new object | `new XMLHttpRequest` | `new Array()`
- [new operator: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
```js
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  const car1 = new Car('Eagle', 'Talon TSi', 1993);

  console.log(car1.make);
  // expected output: "Eagle"
```
- `this` refers to the global scope, the nearest object = `WINDOW` if you don't use the `new` operator
- `new` operator:
1. Creates a blank, plain JavaScript Object;
2. Links (sets the constructor of) `this` object to another object;
3. Passes the newly created object from Step 1 as the `this` context
4. Returns `this` if the function doesn't return its own object

- ARROW FUNCTIONS run into trouble with the `this`: DO NOT USE THEM WITH THIS CODE
- STILL CLUNKY CODE - ON TO CLASSES = PRETTIER SYNTAX

### JavaScript Classes


### Extends and Super Keywords

