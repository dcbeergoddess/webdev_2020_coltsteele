const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//TELL EXPRESS TO PARSE FORM ENCODED INFORMATION FOR REQUEST BODY
//USE THIS MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
//ANTICIPATE JSON DATA// BUILT IN PARSING MIDDLEWARE
app.use(express.json()) //application.json

//SET VIEW ENGINE for EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

//HOME PAGE
app.get('/', (req, res) => {
  res.render('home')
})

// GET /comments - list all comments
// POST /comments - Create a new comment 
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment

//=========================================//
//===========COMMENTS CRUD DEMO============//
//=========================================//
// FAKE DATA FOR COMMENTS IN ARRAY
// use `let` since will be updated and edited
let comments = [
  {
      username: 'Todd',
      comment: 'lol that is so funny!'
  },
  {
      username: 'Skyler',
      comment: 'I like to go birdwatching with my dog'
  },
  {
      username: 'Sk8erBoi',
      comment: 'Plz delete your account, Todd'
  },
  {
      username: 'onlysayswoof',
      comment: 'woof woof woof'
  }
]

//===============INDEX/READ================//
//========renders multiple comments=======//
// pass comments array as object into res.render
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
})

//===============NEW======================//
//=========renders a form=================//
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
})

//===============CREATE===================//
//========creates a new comments==========//
app.post('/comments', (req, res) => {
  // console.log(req.body);
  //EXTRACT/DESTRUCTURE req.body
  const { username, comment } = req.body;
  //push comment to `comments` array
  comments.push({ username, comment })
  res.send("IT WORKED!!!")
})

//===============SHOW=====================//
//==details about one particular comment==//


//===============EDIT=====================//
//====renders a form to edit a comment====//

//===============UPDATE==================//
//======updates a particular comment=====//

//============DELETE/DESTROY=============//
//======removes a single comment=========//


//=========================================//
//===========TACOS BASIC DEMO============//
//=========================================//
// BASIC GET ROUTE
app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
});

//BASIC POST ROUTE
app.post('/tacos', (req, res) => {
  console.log(req.body)
  const { meat, qty } = req.body;
  res.send(`Here are your ${qty} ${meat} tacos`)
})
//=========================================//

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`)
})