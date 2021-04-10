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
- NOT WORKING--- WILL COME BACK TO LATER --> *was using address id to find and not user id*
![PROBLEM IN FOLLOWING ALONG](errorme1.png)

### One to Many
- Primary focus --> VERY COMMON --> Medium amount of Data Approach --> technically all three are one to many just different sizes of data being stored
- One Option is to store your data separately, but then store references to document ID's somewhere inside the parent:
```js
{
  farmName: 'Full Belly Farms',
  location: 'Guinda, CA',
  produce: [
    ObjectID('019823741874389'),
    ObjectID('987665766489348'),
    ObjectID('548546632556633')
  ]
}
```
- Embed a reference to some document that is defined somewhere else --> Most common to use ObjectID
- create Schema and Model for farm products in `farm.js`
- create second Model for farms in `farm.js` now - create array for `products` in that model(this does not mean anything to mongoose)
- [MONGOOSE POPULATE GUIDE](https://mongoosejs.com/docs/populate.html)
- needs to use mongoose's `type: mongoose.Schema.Types.ObjectId`
- usually save to variable before hand `const Schema = mongoose.Schema`
- now `products: [{type: Schema.Types.ObjectID}]` --> not native JS comes from Mongoose
- need to set `ref:` --> name of Model:
```js
//Parent Model
const farmSchema = new.mongoose.Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectID, ref:'Product' }]
})
```
- MAKE FARM ATTACH PRODUCT TO FARM EXAMPLE 1:
![one to many example 1](assets/onetomany1.png)
- ATTACH FARM TO PRODUCT EXAMPLE 2
![one to many example 2](assets/onetomany2.png)

### Mongoose Populate
- One Page you would want just all the farms with name and cit
- One Page you would want just all the products
- CONSOLE.LOG FARM WITH PRODUCTS:
![Printed Current Farm Object in Console](assets/populate1.png)
- Have Mongoose Populate Page with All Farms and Page with all Products using the `ref:`
- Our way of telling Mongoose this is an array of objects IDs and each one represents or is connected to the Product Model
- Call Method called POPULATE --> take ID that has been stored in the array and replace them with the corresponding products
- add populate to find farm and then console.log
```js
Farm.findOne({ name: 'Full Belly Farms' })
.populate('products')
.then(farm => console.log(farm));

```
- IN CONSOLE DIFFERENCE BETWEEN POPULATED AND UNPOPULATED FARM CONSOLE LOG
![NEW Printed Current Farm Object in Console](assets/populate2.png)
- THIS IS ONE POSSIBLE SOLUTION --> NOT THE ONLY WAY

### One to "Bajillions"
- THIRD APPROACH TO ONE TO MANY RELATIONSHIP
- With thousands or more documents, it's more efficient to store a reference to the PARENT on the CHILD document
```js
{
  tweetText: 'lol I just crashed my car because I was tweeting',
  tags: ['stupid', 'moron', 'yolo'],
  user: ObjectId('56465465465')
}
```
- You don't see all tweets from a user on a single page --> some users have tens of thousands of tweets
- ADD TWEET TO USER EXAMPLE 1:
![Add Tweet to User Console Example](assets/onetobajillions1.png)
- `user` is just an ObjectID 
-- ADD TWEET TO USER EXAMPLE 2:
![Add Tweet to User Console Example](assets/onetobajillions2.png)

- Query Database using Mongo to find tweets and populate that user:
![Find First Tweet](assets/onetobajillions3.png)
- Example 2 w/ Populate User:
![Find First Tweet and populate User](assets/onetobajillions4.png)
- Only Populate certain fields:
![Populate certain fields](assets/onetobajillions5.png)
- Populate all tweets w/ user info:
![Populate All Tweets](assets/onetobajillions6.png)

- Build More Complicated Queries Behind the Scene with `Populate`
- make efficient with indexes, etc. --> better optimization
- YOU CAN STORE A REFERENCE ON BOTH THE `child` and the `parent` model to go both directions
- can store just the username on a tweet schema so you wouldn't have to populate
- freedom and flexible comes with risk of making thinks slow and messing up optimization 

### Mongo Schema Design
- [Mongo Blog on Design Part 3](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3)

- Integrate into Express APP
- Denormalization = duplicate some data that you will be accessing frequently on the model
- Paradox of Choice --> so many options to do this
#### RULES OF THUMB: YOUR GUIDE THROUGH THE RAINBOW
1. favor embedding unless there is a compelling reason not to
2. needing to access an object on its own is a compelling reason not to embed it
3. Arrays should not grow without bound. If there are more that a couple hundred documents on the "many" side, don't use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed
4. Don't be afraid of application-level joins: if you index correctly and use the projections specifier(as show in part 2 of Mongo's Blog on Design) then application-level joins are barely more expensive than server-side joins in a relational database.
5. Consider the write/read ratio when denormalizing. A field that will mostly be read and only seldom updated is a good candidate for denormalization: if you denormalize a field that updated frequently then the extra work of finding adn updating all the instances is likely to overwhelm the savings you get from denormalizing
6. As always with MongoDB, how you model your data depends - entirely - on your particular application's data access patterns. You want to structure your data to match the ways that your application queries and updates it
#### DENORMALIZATION
- [Mongo Blog on Design Part 2](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2)
- Two-Way-Referencing 
- Denormalizing from Many --> One

