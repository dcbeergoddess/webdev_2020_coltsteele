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
* [Hash Function Wikipedia](https://en.wikipedia.org/wiki/Hash_function)
- hash table or hash map with 16 different outputs: 
![HASH MAP](assets/hashing3.png) 
* [Cryptographic Hash Functions](https://en.wikipedia.org/wiki/Cryptographic_hash_function)
1. One-way function which is infeasible to invert
2. Small change in input yields same output
3. Deterministic - same input yields same output
4. Unlikely to find 2 outputs with same value
5. Password Hash functions are deliberately SLOW
- EXAMPLE OF HASHING FUNCTION CALLED `SHA-1` --> small changes big difference in output:
![Cryptographic SHA-1 Hash Function](assets/hashing4.png)
- There are cryptographic hash functions that are FAST, used for digital signatures --> cookies --> FAST functions

### Password Salts
- AN EXTRA SAFEGUARD
- Need to remember that people use same password across websites, same passwords are used by different people, only couple of hash algorithms suitable for passwords (we are going to use `bcrypt`)
- [LIST OF MOST COMMON PASSWORDS](https://en.wikipedia.org/wiki/List_of_the_most_common_passwords)
- Possible if someone knew we were using bcrypt, to test common password and match to hash, possible to figure out all other passwords in database --> Reverse lookup table --> pre-compute ahead of time --> NEED SAFEGUARD
- **PASSWORD SALTS:** a random value added to the password before we hash it --> helps ensure unique hashes and mitigate common attacks
- take password and essentially `concatenate` it with some password salt
- QUICK EXAMPLE OF ADDING ON TO CHANGE HASH:
- ![Password Salt quick example](assets/hashing5.png)
- Usually store salt separately --> generate randomly --> add back on to get correct output 
- BCRYPT: Has functionality to add SALT and we won't need to store it separately

### Intro to Bcyrpt
- [BCYRPT PACKAGE](https://github.com/kelektiv/node.bcrypt.js)

### Auth Demo: Setup

### Auth Demo: Registering 

### Auth Demo: Login

### Auth Demo: Staying Logged In With Session

### Auth Demo: Require Login Middleware

### Auth Demo: Refactoring To Model Methods

