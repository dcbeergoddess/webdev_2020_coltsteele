const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

/*
for(let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`)
}
*/

//we come up with sub variable name
for(let sub of subreddits) {
  console.log(`Visit reddit.com/r/${sub}`)
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

/*
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}
*/

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

//iterate over other iterable objects like strings
for (let char of "hello world") {
    console.log(char)
}


