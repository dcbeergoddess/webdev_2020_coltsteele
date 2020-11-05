# DOM EVENTS

## Crucial 

### * Introducing Events
### * addEventListener!!!!
### * Forms Events

<br>

## Important 

### * Keyboard Events
### * Input & Change Events
### * Event Bubbling
### * Event Delegation

<br>

## Notes

<hr>

#### Events
- Responding to user inputs and actions!

* `clicks`
* `drags`
* `drops`
* `hovers`
* `scrolls`
* `form submission`
* `key presses`
* `focus/blur`
* `mouse wheel`
* `double click`
* `copying`
* `pasting`
* `audio start`
* `screen resize`
* `printing`

#### BASICS

- 3 ways to listen and events and run code, one preferred way
  - 1. Inline Events - janky way
  - 2. [Onclick Property](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
  - 3. addEventListener 

#### addEventListener
- Specify the event type and a callback to run
- BEST OPTION
- more options you can pass in `capture`, `useCapture`, `once`
- also `removeEventListener` if you created event with `removeEventListener`
```js
  const button = document.querySelector('h1');

  button.addEventListener('click', () => {
    alert("You clicked me!!")
  })
```

#### THIS KEYWORD
- when using `this` inside of a callback function that an event handler will invoke, `this` will refer to that something the event is being triggered on 
```js
const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

for(let button of buttons){
  button.addEventListener('click', colorize)
}
for(let h1 of h1s){
  h1.addEventListener('click', colorize)
}
//USE KEYWORD THIS TO MAKE USABLE FUNCTION FOR BOTH ELEMENTS WE WANT TO CHANGE
function colorize(){
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
  console.log(this)
};
```

#### THE EVENT OBJECT
- contains information about event, clientX, clientY(coordinates)
- USE IT FOR KEYBOARD EVENTS
- OBJECT DETAILS depend on type of event being used
```js
//can pass parameter in function, usually event or e, gives access to event object constructed for us that contains information about the event!!!
  document.querySelector('button').addEventListener('click', (e) => {
    console.log(e) //look at object
  })
```
- listen for keyboard events on the entire window or particular input, when you want to know what key was clicked

```js
//use event object to know what key was pressed
input.addEventListener('keydown', (e) => {
  //can use either of these to access what was typed
  console.log(e.key)
  console.log(e.code)//location on keyboard, code will always be the position

})
```

#### FORM EVENTS AND PreventDefault
- Do something with a user submits a form
- default is to submit form and go to whatever location is specified in the action. if not action it will just refresh the page as a default
  - on event object method = `preventDefault()`
- `value` - represents whatever is in input field, etc
- `elements` - give inputs a `name`, that `name` is set up as a property name in elements, part of object console.dir(element)

**EXERCISE 61 Solution**
```js
// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty
    addNewItem(qtyInput.value, productInput.value);
    productInput.value = '';
    qtyInput.value = '';
    
})

const addNewItem = (qty, product) => {
    const newItem = document.createElement('li');
    newItem.innerText = `${qty} ${product}`;
    list.appendChild(newItem);
}
```

#### INPUT AND CHANGE EVENTS
- Make something happen live instead of on submit
- `change` - fires on blur
- `input` - fires when input changes 
```js
const input = document.querySelector('input')

input.addEventListener('change', (e) => {
  console.log("asdfasdf")
  //will appear only after you leave the input and it was different from what was in the input after you leave
});

input.addEventListener('input', (e) => {
  console.log("input event")
});
```

**COLT EXERCISE 62 SOLUTION**
```js
const h1 = document.querySelector('h1');
const input = document.querySelector('input')

input.addEventListener('input', (e) => {
    h1.innerText = `Welcome, ${input.value}`;
    if(!input.value){
        h1.innerText = "Enter Your Username"
    }
})
```

#### EVENT BUBBLING
- all alerts fire when button is clicked
- other events trigger, bubble up to the highest level
```js
  <section onclick="alert('section clicked')">
    <p onclick="alert('paragraph clicked')">
      I am a paragraph:
      <button onclick="alert('button clicked')">CLICK</button>
    </p>
  </section>
```
- `stopPropagation()` : prevent event from bubbling up!!!!
```js
  button.addEventListener('click', (e) => {
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation();
  })
```

#### EVENT DELEGATION
- event listeners can not see into future, if you add a new element after the fact it won't adopt the listener
- `target` - property to find element that is clicked on in event object
- write code to look at target and check if it's a li for example and delete is based on that and then remove it
```js
tweetsContainer.addEventListener('click', (e) => {
  //e.target is what is clicked
  e.target.remove()
})

//CHECK IF ELEMENT IS AN LI
tweetsContainer.addEventListener('click', (e) => {
  //check to make sure what you clicked an li
  //e.target is what is clicked if li then remove
  e.target.nodeName === 'LI' && e.target.remove();
  
})
```








