
const person = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  shoutName: function () {
    setTimeout(() => { //use arrow function instead
      console.log(this)
      console.log(this.fullName())
    }, 300)
}
}
console.log(person.fullName()) //'Viggo Mortensen'
console.log(person.shoutName());


const person2 = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: () => {
    console.log(this)
    return `${this.firstName} ${this.lastName}`
  },
    shoutName: function () {
      setTimeout(() => { //use arrow function instead
        console.log(this)
        console.log(this.fullName())
      }, 300)
  }
}
console.log(person2.fullName()) //'undefined, undefined'
console.log(person2.shoutName()); //undefined, setTimeOut is on Window
