# YelpCamp: Errors & Validating Data
- [YelpCamp Github Code For Section](https://github.com/Colt/YelpCamp/tree/5f3b3ec478c5bb35f2773c2048409a9418c78b60
)
- Validations on Client Side - Forms, etc
- Server Side - validate `req.body` - Make sure they match a pattern before you send to Mongo Database

## Client-Side Form Validations
### Can Use HTML5 Validations and depend on browser to handle validations
- In `new.ejs`:
```html
  <h1 class="text-center">New Campground</h1>
  <!-- col-6 => don't want all the way to left => offset-3 -->
  <div class="col-6 offset-3">
    <form action="/campgrounds" method="POST">
      <div class="mb-3">
        <label class="form-label" for="title">Title</label>
        <input class="form-control" type="text" id="title" name="campground[title]" required>
```
- IN LOCALHOST:
![HTML5 Validation](assets/html5.png)
- Not super attractive --> Depends on Browser --> Implementation is not standardized across browsers
### Built In Bootstrap5 Validation
- ![Bootstrap Validation](https://getbootstrap.com/docs/5.0/forms/validation/)
- Use `required` but tell browser not to validate --> `novalidate`
- `<form class="row g-3 needs-validation" novalidate>`
- BOOTSTRAP TAKES OVER INSTEAD
- THEN WE NEED TO ADD SOME JAVASCRIPT IN
```js
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
```

## Basic Error Handler

## Defining ExpressError Class

## More Errors

## Defining Error Template

## JOI Schema Validations
- [JOI DOCS](https://joi.dev/api/?v=17.2.1)

## JOI Validation Middleware