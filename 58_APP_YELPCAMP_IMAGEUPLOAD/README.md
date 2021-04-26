# YelpCamp: Image Upload
* [GITHUB CODE FOR SECTION](https://github.com/Colt/YelpCamp/tree/6570c595edf0480fab6b832abd35d37717a081cd)
- Instead of Using image URL --> garbage
- We will learn how to upload many --> NOT JUST ONE!!
- Upload a file to be associated with a campground
- TWO THINGS: 1 - a regular HTML form is not going to able to send files to our server --> we are going to have to change our form in order to do that && 2. we need to stor the images somewhere and typically we don't store them in Mongo (because they could be very large - BSON-document size limit of - 16 megabytes max) --> there are workarounds:
* [GridFS](https://docs.mongodb.com/manual/core/gridfs/)
- does not support multiple uploads
- We are going to use Cloudinary --> could use AWS --> Free Tier will work for us on Cloudinary

## The Multer Middleware
* [Multer Docs](https://github.com/expressjs/multer)
- We need to change the way we send them html doc right now it is set to `urlencoded`
* ENCTYPE WAY:
- [enctype](assets/image1.png)
- THIS WILL BREAK STUFF
1. Go to new form on campgrounds --> set it to have an `enctype="multipart/form-data"`:
```html
  <h1 class="text-center">New Campground</h1>
  <!-- col-6 => don't want all the way to left => offset-3 -->
  <div class="col-6 offset-3">
    <form action="/campgrounds" method="POST" class="validate-form" novalidate enctype="multipart/form-data">
```
2. Add in input for file instead of image div in new form for campground:
```html
      <div class="mb-3">
        <label class="form-label" for="location">Location</label>
        <input class="form-control" type="text" id="location" name="campground[location]" required>
        <div class="valid-feedback">
          Looks Good!
        </div>
      </div>
      <input type="file" name="campground[image]" id="">
      <!-- <div class="mb-3">
        <label class="form-label" for="image">Image URL</label>
        <input class="form-control" type="text" id="image" name="campground[image]" required>
        <div class="valid-feedback">
          Looks Good!
        </div>
      </div> -->
```
- NOW IN LOCAL HOST --> CAN SELECT FILES:
* [New Form in Local Host](assets/image2.png)
- Next we go over to route where the form is being submitted --> campground post routes --> `routes/campground.js`
- Lets print out the `req.body` of new form being submitted
```js
router.route('/')
  .get(catchAsync(campgrounds.index))
  // .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));
  .post((req, res) => {
    res.send(req.body);
  });
```
- Nothing be sent back in req.body:
* [req.send example](assets/image3.png)
- In order TO PARSE THE `multipart/form-data`, we actually need to use another middleware
* **Multer** : for express, a middleware for handling `multipart/form-data` which is primarily used for uploading files
1. `npm i multer`
-  Multer adds a `body` object and a `file` or `files` object to the `request` object. The `body` object contains the values of the text fields of the form, the `file` or `files` object contains the files uploaded via the form.
```html
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
```
- EXAMPLE OF HOW TO USE FROM DOCS:
- have access to middleware --> EX: `upload.single('avatar')` or `upload.array('photos')`:
```js
var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' }

var app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})
```
2. In our `routes/campgrounds.js` file:
```js
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
//INITIALIZE IT (aka EXECUTE THE FUNCTION) --> Pass in a configuration object --> specify a folder path/destinations for the files
// WOULD NOT STORE LOCALLY IN REAL WORLD THIS IS JUST A DEMO --> Normally specify cloud service, AWS, etc.
// TESTING PURPOSES --> DiskStorage or MemoryStorage in DOCS

router.route('/')
  .get(catchAsync(campgrounds.index))
  // .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));
  .post(upload.single('campground[image]'), (req, res) => {
    res.send(req.body, req.file);
  });
```
- TEST in Local Host:
* [res.send results in localhost](assets/multer1.png)
- File created in Repo with encoded file data
3. Lets console.log so we can see it in the terminal
```js
router.route('/')
  .get(catchAsync(campgrounds.index))
  // .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));
  .post(upload.single('campground[image]'), (req, res) => {
    console.log(req.body, req.file);
        res.send("IT WORKED!!")
  });
```
- RESULT IN TERMINAL:
* [result from console.log](assets/multer2.png)
4. TEST w/ Multiple Files:
```js
router.route('/')
  .get(catchAsync(campgrounds.index))
  // .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));
  .post(upload.array('campground[image]'), (req, res) => {
    console.log('REQ.BODY...', req.body, 'REQ.FILES...', req.files);
    res.send("IT WORKED!!")
  });
```
- now it expects an array of multiple files
- need to update the input for multiple files:
```html
<input type="file" name="campground[image]" id="" multiple>
```
- Submit a new form with multiple files
* [sending multiple photos in new form](assets/multer3.png)
- RESULT IN TERMINAL:
* [result from console.log](assets/multer4.png)
- Now we need to use another tool and tell multer to store the files elsewhere and not in the local uploads file in the repo that it created

## Cloudinary Registration
* [CLOUDINARY HOMEPAGE](https://cloudinary.com/)
- Sign up for free account --> does not require credit card to start
- We do not want to embed our Account API Key and API Secret directly into our app

## Environment Variables with dotenv
* [DotEnv](https://github.com/motdotla/dotenv)
- Store Sensitive Data in separate file that we do not share with other people
* [FROM DotEnv Docs](assets/dotenv1.png)
1. touch `.env` in top level of project
2. In File Define Key Value Pairs:
```
SECRET=thisisabettersecret
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```
- This is where we will put our cloudinary info
3. make sure that you have a `.gitignore` file set up in top level of project as well to include 
```
.env
node_modules
```
- to use information in `.env` file we need to use the `dotenv` npm package
4. `npm i dotenv`
5. set up top of `app.js` file:
```js
if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
};
//SHOULD HAVE ACCESS TO 
console.log(process.env.SECRET)
```
- PRINT OUT IN TERMINAL:
* [console.log result](assets/dotenv2.png)
6. NOW ADD IN CLOUDINARY INFORMATION FOR YOU:
```
CLOUDINARY_CLOUD_NAME=asdfasdfasdf
CLOUDINARY_KEY=asdfasdfasdf
CLOUDINARY_SECRET=asdfasdf
```
- DO NOT NEED QUOTES OR SPACES

## Uploading to Cloudinary Basics

## Storing Uploaded Image Links in Mongo

## Displaying Images In A Carousel

## Fixing Our Seeds

## Adding Upload to Edit Page

## Customizing File Input

## A Word Of Warning!

## Deleting Images Form

## Deleting Images Backend

## Adding A Thumbnail Virtual Property
* [Cloudinary Image Transformations](https://cloudinary.com/documentation/image_transformations)