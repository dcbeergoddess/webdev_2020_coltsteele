String.prototype.grumpus = () => alert("GO AWAY!");
const cat = "Blue";

// cat.grumpus();

String.prototype.yell = function() {
  return `OMG!!!!!${this.toUpperCase()}!!!!!! ARRRGGG`
};

Array.prototype.pop = () => {
  return "Sorry I want that Element, I will never pop it off"
};








