# Creating Servers With Express

## Crucial 

### * What are frameworks?
### * Our First Express App
### * Routing Basics
### * Path Parameters
### * Working With Query Strings

<br>

## Important 

### * Nodemon

<br>

## Notes

<hr>

### Introducing Express
- A Framework
- "fast, un-opinionated, minimalist web framework for Node.JS"
- NPM Package which comes w/ a bunch of methods and optional plugins that we can use to build web applications and API's
- [EXPRESS GITHUB](https://github.com/expressjs/express)
**Express Helps Us:**
* Start up a Server to listen for Requests
* Parse incoming requests
* Match those requests to particular routes
* Craft our http response and associated content

#### Library vs Framework
- **LIBRARY**: You control the flow of the application code and decide when to use the library
- **FRAMEWORK**: control inverted | tells you where to plug in code | `inversion of control`
- `Ruby on Rails` = Framework

### Our Very First Express App
- [OUR FIRST APP CODE](01_first_app/index.js)
- `npm init -y`: skip questions
- `npm i express`: `--save` not necessary in newer versions!!!!
```js
  const express = require('express');
  const app = express(); //Execute Express
  console.dir(app) // TO SEE WHAT WE HAVE AVAILABLE
  PORT = 3000

  app.use(() => {
    console.log("WE GOT A NEW REQUEST")
  }) //EVERY TIME A REQUEST HIT OUR SERVER WE PRINT THIS OUT

  app.listen(PORT, () => {
    console.log(`LISTENING ON http://localhost:${PORT}` )
  }) //listen on port

```
- `localhost:` : specific to your local machine
- `PORT`: Different addresses we can use to identify and refer to them
- 

### The Request and Response Objects

### Express Routing Basics

### Express Path Parameters 

### Working With Query Strings

### Auto-Restart with Nodemon

