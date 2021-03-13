// makeColor //
// FACTORY FUNCTION///////////////////////////////////////////
/*
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`
  };
  color.hex = function() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
  }
  return color
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.hex());
console.log(firstColor.rgb()); 

const black = makeColor(0, 0, 0);
console.log(black.rgb());
console.log(black.hex())
*/
// CONSTRUCTOR FUNCTION ////////////////////////////////

// new operator:
//1. Creates a blank, plain JavaScript Object;
//2. Links (sets the constructor of) `this` object to another object;
//3. Passes the newly created object from Step 1 as the `this` context
//4. Returns `this` if the function doesn't return its own object

function Color(r,g,b) {
  this.r = r;
  this.g = g;
  this.b = b;
  console.log(this); //WINDOW OBJECT
};

console.log("=======no new keyword============")
console.log(Color(255, 0, 0));
console.log("=======with new keyword============")
console.log(new Color(255, 40, 100));

//Make method part of prototype//
// DID NOT LIKE ARROW FUNCTIONS!!!!!!! RUN INTO TROUBLE WITH KEYWORD THIS
Color.prototype.rgb = function() {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`
};

Color.prototype.hex = function() {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
}

//ADD RGBA METHOD
//pass in opacity as argument and give default of 1.0
Color.prototype.rbga = function(a=1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

console.log("=======COLOR 1============")

const color1 = new Color(40,50,60);
console.log("I have a RGB Prototype:", color1)
console.log("I can still access color1.rbg():", color1.rgb())
console.log("HERE IS MY HEX:", color1.hex())
console.log("RGBA", color1.rbga(.5))

console.log("=======COLOR 2============")

const color2 = new Color(0,0,0);
console.log("I have a RGB Prototype:", color2)
console.log("I can still access color2.rbg():", color2.rgb())
console.log("HERE IS MY HEX:", color2.hex())

console.log("==========NOW THE METHODS EQUAL TRUE===============")
console.log("color1.hex === color2.hex returns:", color1.hex === color2.hex)

document.body.style.backgroundColor = color1.rbga(.5);




