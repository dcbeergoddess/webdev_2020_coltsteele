//METHODS - FUNCTIONS ADDED AS PROPERTIES ON OBJECTS
//SHORTHAND VERSION
const myMath = {
  PI: 3.14159,
  square(num){
    return num * num;
  },
  cube(num){
    return num ** 3; //num to the third power
  }
}

console.log(myMath.square(2))
console.log(myMath.cube(2))
console.log(myMath.PI)
console.log(myMath["cube"](4))//odd way to do it but it works

//THE KEYWORD `THIS` AND WINDOW OBJECTS

const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish fold',
  meow(){
    console.log('THIS IS', this)
    //WINDOW OBJECT, TOP LEVEL OBJECT 
    console.log(`${this.name} says, "meow, meow, meow"`) //refers to this object
  }
}
console.log(cat.meow())

//invocation context - this refers to the object to the left of the dot
const meow2 = cat.meow;
console.log(meow2()); //this does not print name, 

//EXERCISE

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg(){
      this.eggCount += 1;
      return "EGG"
  }
}
//increase EGGCOUNT by 1 in method and return "EGG"