/*=========== REFACTOR IS CREATE STANDAONE CLASSES TO EXTEND====////
class Cat {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating!`
  }
  meow(){
    return 'MEOWWW!!'
  }
}

class Dog {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating!`
  }
  bark(){
    return 'WOOOOOF!!'
  }
}
*/

/////REFACTORED CODE//////////

class Pet {
  constructor(name, age){
    console.log("IN PET CONSTRUCTOR")
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating`
  }
}

class Dog extends Pet {
  bark(){
    return 'WOOOOOF!!'
  }
  //If define new method with same name from extended class this one will execute when called upon
  eat(){
    const { name } = this;
    return `${name} scarfs his food`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9){
    console.log('IN CAT CONSTRUCTOR')
    super(name, age)
    this.livesLeft = livesLeft;
  }
  meow(){
    return 'MEOWWW!!';
  }
}


console.log('==========DOG CLASS EXTENDED FROM PET=========')
const wyatt = new Dog('wyatt', 4);
console.log(wyatt);
console.log(wyatt.bark());
console.log(wyatt.eat())

console.log('==========CAT CLASS EXTENDED FROM PET=========')
const jade = new Cat('jade', 9);
console.log(jade);
console.log(jade.meow());
console.log(jade.eat())