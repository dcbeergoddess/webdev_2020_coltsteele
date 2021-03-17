const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
uuid();

//TELL EXPRESS TO PARSE FORM ENCODED INFORMATION FOR REQUEST BODY
//USE THIS MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
//ANTICIPATE JSON DATA// BUILT IN PARSING MIDDLEWARE
app.use(express.json()); //application.json
//method-override MIDDLEWARE
app.use(methodOverride('_method'));

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
      id: uuid(),
      username: 'Todd',
      comment: 'lol that is so funny!'
  },
  {
      id: uuid(),
      username: 'Skyler',
      comment: 'I like to go birdwatching with my dog'
  },
  {
      id: uuid(),
      username: 'Sk8erBoi',
      comment: 'Plz delete your account, Todd'
  },
  {
      id: uuid(),
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
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments'); //default GET Redirect
});

//===============SHOW=====================//
//==details about one particular comment==//
app.get('/comments/:id', (req, res) => {
  //extract id from req.params
  const { id } = req.params;
  //array method find: where c.id = this id(string not number so parse) | find finds first instance
  //CHANGED WHEN WE USED THE UUID -- NO LONGER NEED TO 
  // const comment = comments.find(c => c.id === parseInt(id));
  const comment = comments.find(c => c.id === id);
  //render page//export comment object to template
  res.render('comments/show', { comment, id });
});

//===============EDIT=====================//
//====renders a form to edit a comment====//
// take id and find the comment based on some payload that was sent in the request body
app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  // use next two lines to test in postman
  // console.log(req.body.comment); 
  // res.send("ALL GOOD NOW")
  const newCommentText = req.body.comment;
  const foundComment = comments.find(c => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect('/comments')
})

//===============UPDATE==================//
//======updates a particular comment=====//
app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment, id });
})

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