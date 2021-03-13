// makeColor //
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

