# YELPCAMP: Common Security Issues
* [COLT'S GITHUB CODE FOR THIS SECTION](https://github.com/Colt/YelpCamp/tree/a05fccdf44cd4e5796150347594565471ab3ee60)

## Mongo Injection
* [Express Mongo Sanitize Package](https://www.npmjs.com/package/express-mongo-sanitize)
- Usually have whole team working on this at a company, we are just going to focus on some of the main issues you run into
- [SQL Injection ATTACK](https://en.wikipedia.org/wiki/SQL_injection)
* Writing a query that user information and use search field to populate query
* user adds in new quote to close query and then they can add in their own query, they could remove and entire table (in mongo collection)
- IN MONGO COULD DO SOMETHING LIKE THIS in USERNAME FIELD
* `{"$gt": ""}` --> Mongo Operator --> enter in the field, find username is greater that nothing --> so find all usernames
- Nested objects allows for people to manipulate original query we are trying to make --> don't let username use dollar signs and periods. 
* USE Sanitize Package!!!
1. `npm i express-mongo-sanitize`
2. ADD CONSOLE.LOG in `app.js` TO SEE `req.query`
```js
app.use((req, res, next) => {
  //Every Request has access now
  //if you are not coming from these two routes..., if req.originalUrl does not include one of these then..
  if(!['/login', '/register', '/'].includes(req.originalUrl)) {
    req.session.returnTo = req.originalUrl 
  }
  console.log(req.query)
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});
```
- IN TERMINAL:
* ![Console.log of req.query](assets/security1.png)
- We want to prohibit this query
- include package and use it
```js
//mongo sanitize
const mongoSanitize = require('express-mongo-sanitize');
```
```js
app.use(mongoSanitize({
  replaceWith: '_'
}));
```
- IN TERMINAL
* ![Result in terminal](assets/security2.png)

## Cross Site Scripting (XSS)
* [XSS GAME](https://xss-game.appspot.com/)
- An Attacker will inject their own client side scripts that will run in the browser on someone elses application that does something bad
- Play Hacker in Game --> Simple Intro to XSS
- a lot of people have cookies available under documents and can inject script to grab information and send it to a bad server
 
## Sanitizing HTML w/ JOI
* [Sanitize HTML Package](https://www.npmjs.com/package/sanitize-html)
- Using EJS so we can escape the fact if a user enters html into a field when editing a campground but it will show up in the PIN right now
- Sanitize your inputs --> especially to not let them enter script tags
- JOI does not come with it's own validation for escaping html (can use `express-validator` instead of JOI)
* JOI allows us to create extensions 
```js
const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});
```
- `npm i sanitize-html`
```js
const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
  type: 'string',
  base: joi.string(),
  messages: {
      'string.escapeHTML': '{{#label}} must not include HTML!'
  },
  rules: {
      escapeHTML: {
          validate(value, helpers) {
              const clean = sanitizeHtml(value, {
                  allowedTags: [],
                  allowedAttributes: {},
              });
              if (clean !== value) return helpers.error('string.escapeHTML', { value })
              return clean;
          }
      }
  }
});

const Joi = BaseJoi.extend(extension);
```
- TRY TO ENTER SCRIPT TAG IN REVIEW FIELD:
* ![try to hack](assets/secrity3.png)
- GET ERROR BACK
* ![application now yelling at us](assets/secrity4.png)

## Minor Changes to Session/Cookies
- We set up the `httpOnly` on the session config --> cookies only accessible through HTTP and not JavaScript --> folks cannot see our session cookie if they are trying to hack and grab cookies
- Add in `secure: true` --> will break things for now... comment out for now --> when we login it is not keeping us logged in but we will want it when we deploy --> give cookie different name so not default `connect.sid`
```js
//SESSION MIDDLEWARE
const sessionConfig = {
  name: 'session',
  secret: 'thisshouldbeabettersecret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, 
    secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
};
```

## Hiding Errors

## Using Helmet

## Content Security Policy Fun