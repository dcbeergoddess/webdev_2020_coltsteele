//KEYWORD CLASS - USUALLY UPPERCASE FOR NAME - PATTERN 
class Color {
  //ADD IN CONSTRUCTOR
  constructor(r, g, b, name){
    console.log("=======INSIDE CONSTRUCTOR=====")
    console.log(r, g, b)
    //will access this.r, etc.
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  //REFACTOR RGB and RGBA
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`
  }
  //define a method
  rgb(){
    return `rgb(${this.innerRGB})`;
  }
  rgba(a=1.0){
    return `rgba(${this.innerRGB}, ${a})`
  }
  hex(){
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
  }
}

//Automatically prints out constructor
const c1 = new Color(255, 255, 140, "yay");  
console.log(c1);

const white = new Color(255, 255, 255);
console.log(white);