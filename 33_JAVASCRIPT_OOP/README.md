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
- NOT AS COMMONLY USED

### Constructor Functions
- [CONSTRUCTOR FUNCTION CODE ALONG](03_constructor_functions/app.js)
- 

### JavaScript Classes

### Extends and Super Keywords

