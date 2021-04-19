# Authentication From "Scratch"

## Crucial 

### * Authentication vs. Authorization
### * How To (Not) Store Passwords
### * Working With Bcrypt

<br>

## Important 

### * Auth Demo 
### * Understanding Hashing Functions
### * Password Salts

<br>

## Notes

<hr>

### Authentication vs. Authorization
- Overview of How Authentication Works --> Later we will implement `Passport` in YelpCamp to help implement Authentication --> allows you to authenticate using twitter, github, google, etc as well
- **Authentication**:
* The Process of verifying who a particular user is
* We typically authenticate with a username/password combo, but we can also use security questions, facial recognition, etc
- **Authorization**:
* Verifying what a specific user has access to
* Generally, we authorize after a user has been authenticated. "Now that we know who you are, here is what you are allowed to do and NOT allowed to do."

### How to (not) Store Passwords

### Cryptographic Hashing Functions

### Password Salts

### Intro to Bcyrpt
- [BCYRPT PACKAGE](https://github.com/kelektiv/node.bcrypt.js)

### Auth Demo: Setup

### Auth Demo: Registering 

### Auth Demo: Login

### Auth Demo: Staying Logged In With Session

### Auth Demo: Require Login Middleware

### Auth Demo: Refactoring To Model Methods

