# Defining RESTful Routes

## Crucial 

### * GET vs POST Requests
### * Handling Post Request in Express
### * Parsing Request Body
### * Forms + Express

<br>

## Important 

### * Method Override
### * RESTful Routing

<br>

## Notes

<hr>

### GET vs POST Requests
**GET**
* Used to retrieve information
* Data is sent via `query string`
* Information is plainly visible in the URL
* Limited amount of data can be sent

**POST**
* Used to post data to the `server`
* Used to write/create/update
* Data is sent via request body, not a query string!
* [EXAMPLE](getpost.html)

### Defining Express Post Routes
- RECEIVING AND HANDLING POST REQUESTS IN EXPRESS

### Parsing the Request Body
- EXTRACT DATA FROM POST
- DIFFERENT FORMATS - Parse Data
- STATE HOW TO PARSE
- [`req.body` docs](http://expressjs.com/en/4x/api.html#req.body) 
```js
//TELL EXPRESS TO PARSE FORM ENCODED INFORMATION FOR REQUEST BODY
//USE THIS MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
//ANTICIPATE JSON DATA// BUILT IN PARSING MIDDLEWARE
app.use(express.json()) //application.json
```

### INTRO TO REST
- `RE`presentational `S`tate `T`ransfer
- **REST**: an "architectural style for distributed hypermedia systems???????
- BASICALLY: a set of guidelines for how a client + server should communicate and perform `CRUD` operations on a given resource
- MAIN IDEA: treating data on the server-side as resources that can be CRUDed
- The most common way of approaching REST is in formatting the URLs and HTTP verbs in your applications
- `C`reate `R`ead `U`pdate `D`estroy
- CLIENT-SERVER Architecture
- [DISSERTATION ON REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- [GITHUB GISTS](https://docs.github.com/en/rest/reference/gists)
- PUT PATCH DELETE
- PATCH = UPDATE

### RESTful Comments Overview

### RESTful Comments New

### Express Redirects

### RESTful Comments Show

### The UUID Package

### RESTful Comments Update

### Express Method Override

### RESTful Comments Delete