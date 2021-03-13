// Taken from StackOverflow: Converts rgb to hex
function hex (r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
}

//Function to take three numbers and return a valid rgb string for use is CSS
function rgb(r, g, b){
  return `rbg(${r}, ${g}, ${b})`
}

console.log(hex(255, 100, 20))
"#ff6414"
"(rgb(255, 100,20)"

console.log(rgb(255, 25, 100))


//MAKE OBJECT TO CONVERT BACK AND FORTH from rgb to hex
// FACTORY FUNCTION: make object that automatically had a hex and rgb method, stored the RGB values as properties/values on the object

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function() {
    console.log(this)
    // return `rbg(${this.r}, ${this.g}, ${this.b})`
    //DESTRUCT FROM `THIS`//////////////////////////
    const { r, g, b } = this;
    // then return
    return `rgb(${r}, ${g}, ${b})`
  };
  color.hex = function() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
  }
  return color
}

const firstColor = makeColor(35, 255, 150);
"#23ff96"
"rgb(35, 255, 150)"
console.log(firstColor)
console.log(firstColor.hex())
console.log(firstColor.rgb())



