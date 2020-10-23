// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

for(let i = 1; i <= 10; i++){
  console.log(i);
}

//making new variable with i --->most common, only exists for purpose of this loop
//middle is boolean expression, as lon as that is true i will keep running
//end, update value of i

//When it gets to 11, middle expression return false and loop stops

for(let num = 1; num <= 10; num += 1) {
  console.log("IM IN THE LOOP BODY!!");
  console.log(num);
}

//even numbers
for(let i = 0; i <= 20; i += 2){
  console.log(i);
}

//odd numbers
for(let i = 1; i <= 20; i += 2){
  console.log(i);
}

//COUNT DOWN FROM 100 by 10

for(let i = 100; i >=0; i -= 10){
  console.log(i);
}

//WEIRD: Can Use multiplication or division but not common
for(let i = 10; i <= 1000; i *= 10){
  console.log(i);
}






