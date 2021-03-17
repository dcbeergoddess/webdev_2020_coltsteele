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
  res.render('home');
});

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
      id: 1,
      username: 'Todd',
      comment: 'lol that is so funny!'
  },
  {
      id: 2,
      username: 'Skyler',
      comment: 'I like to go birdwatching with my dog'
  },
  {
      id: 3,
      username: 'Sk8erBoi',
      comment: 'Plz delete your account, Todd'
  },
  {
      id: 4,
      username: 'onlysayswoof',
      comment: 'woof woof woof'
  }
];

//===============INDEX/READ================//
//========renders multiple comments=======//
// pass comments array as object into res.render
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

//===============NEW======================//
//=========renders a form=================//
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

//===============CREATE===================//
//========creates a new comments==========//
app.post('/comments', (req, res) => {
  // console.log(req.body);
  //EXTRACT/DESTRUCTURE req.body
  const { username, comment } = req.body;
  //push comment to `comments` array
  comments.push({ username, comment });
  res.redirect('/comments'); //default GET Redirect
});

//===============SHOW=====================//
//==details about one particular comment==//
app.get('/comments/:id', (req, res) => {
  //extract id from req.params
  const { id } = req.params;
  //array method find: where c.id = this id(string not number so parse)
  const comment = comments.find(c => c.id === parseInt(id));
  //render page//export comment object to template
  res.render('comments/show', { comment });
});

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
//GENERIC RESPONSE FOR WRONG PATHS
app.get('*', (req, res) => {
  res.send(`I do not know that path!`)
})

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`)
})