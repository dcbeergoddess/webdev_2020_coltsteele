# Data Relationships With Mongo

## Crucial 

### * One to Few
### * One to Many
### * One to Bajillions
### * Populate

<br>

## Important 

### * Mongo Schema Design

<br>

## Nice to Have

### * SQL Relationships Overview

<br>

## Notes

<hr>

### Introduction to Mongo Relationships
- Work with Relationships between data in mongo
- How in Mongo can we model some common relationships and what are the patterns use
![Facebook Old Data Model Relationships Photo](assets/facebook_old.jpeg)

### SQL Relationships Overview
- IMDB Example: Help Keep Track of what actors are in what movies
![Initial Data For SQL](assets/sql1.png)
- Example of **Many to Many** Relationship --> Movie can have multiple actors --> actors can have multiple movies
- Need to define 3rd Table in SQL to represent roles --> `Role` in movies and define with `actor_id` and `movie_id`
- Take info from one table and `join` with another
![3rd Table for Database](assets/sql2.png)
- Mongo good with Node.Js and taught with Express
- Mongo is not the only database you should know -- SQL is good to know too!

### One to Few
- A lot of options in Mongo for how we structure information
- No way you could be an expert in Mongo
- Call Attention to a couple of basic considerations when you are structuring your data. 
- **One to Few**: Easiest of them all --> Embed the data directly in the document
- Example:
```js
{
  name: 'Tommy Cash',
  savedAddress: [
    { street: 'Rahukohtu 3', city: 'Tallinn', country: 'Estonia' },
    { street: 'Ravala 5', city: 'Tallinn', country: 'Estonia' }
  ]
}
```
- might have a couple of addresses saved per an account
- store them directly in the same document/account of the user (not going to have thousands of addresses) --> do you need all user addresses for a larger purpose (probably not...)
- Just access address through the `user`
[CODE FOR USER](01_mongoose_relationships/user.js)
- TEST IN NODE --> `node user.js`:
![Mongo User Test](assets/onetofew1.png)
- An `id` is automatically created for `addresses`
- Treats `addressesd` as it's own schema behind the scenes --> you can turn that `id` off if you want to --> But it can come in useful down the line to have id attached
![Example without id](assets/onetofew2.png)
![CONSOLE IN MONGO](assets/onetofew3.png)
- create function to add as many address that we want
1. It would expect an user `id` 
2. findById and and pass in that `id`
3. then set `user.addresses.push` --> second address we are pushing and we are awaiting that so `save()` it and save to variable so we can console.log(res) for learning :)
```js
const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push(
    {
      street: '666 Hail Satan St.',
      city: 'New York',
      state: 'New York',
      country: 'USA'
    }
  )
  const res = await user.save();
  console.log(res);
}
```
- then call `addAddress()` --> passed in id (copy from mongo)
- `addAddress(6070d8edb8a83e472a77f42a)`
- test `node app.js`
- NOT WORKING--- WILL COME BACK TO LATER
![PROBLEM IN FOLLOWING ALONG](errorme1.png)


### One to Many
- Primary focus --> VERY COMMON

### Mongoose Populate

### One to "Bajillions"

### Mongo Schema Design
- [Mongo Blog on Design](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3)