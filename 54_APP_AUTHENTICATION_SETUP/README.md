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
- Username and Password
- NEVER STORE PASSWORDS IN TEXT IN DATABASE AS IT IS--> DISASTER
- WHAT DO WE DO INSTEAD??
- **HASHING** THE SOLUTION!
* Rather than storing a password in the database, we run the password through a **hashing function** first and then store the result in the database
* **Hashing Functions:** Functions that map input data of some arbitrary size to fixed-size output values
![HASHING FUNCTIONS EXAMPLE](assets/hashing1.png)
- when user logs in with password we run that password through the same algorithm, the same hashing function that we used to store the hashed password, that gives us an output and then we check if the two outputs are the same 
![HASHING FUNCTIONS EXAMPLE](assets/hashing2.png)

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

