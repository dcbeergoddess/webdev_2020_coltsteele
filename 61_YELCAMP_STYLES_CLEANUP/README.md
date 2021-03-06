# YelpCamp: Styles Clean Up
* [COLT'S GITHUB CODE FOR THIS SECTION](https://github.com/Colt/YelpCamp/tree/9d3a45dde998964baf9c25488f6107f3a2f9990b)

## Styling Home Page
- Make an Actual Landing Page and separate CSS fro `home.ejs` in views
- Had to put in old bootstrap CDN that Colt was using to make styling work for this application

## Additional Home Page Styling
- Add a background image to the body so you don't have ugly gray color
- adding in two background images. the first is just a black gradient that makes image a little darker
- `cover` to not have repeated and `center` to use center of photo
```css
body {
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1559521783-1d1599583485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    background-size: cover;
    background-position: center;
```
* STYLE NAV-LINKS --> make them white with some transparency
```css
.nav-link {
  padding: 0.25rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 1rem;
}
```
* Change Styling when you Hover Over:
```css
.nav-link {
  padding: 0.25rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 1rem;
  border-bottom: 0.25rem solid transparent;
}

.nav-link:hover {
  color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.5);
}
```
- Add Box Shadow and Text Shadow to body but then update button styling
```css
.btn-secondary, .btn-secondary:hover{
  color: #333 !important;
  text-shadow: none;
}
```
- Had to add `!important` to the color to make it work for the button. Got some weird bootstrap going on with newer version changes in beta version. Colt is using the alpha1 version.

- Make active Nav-Link stand out:
```css
.nav-link.active {
  color: white;
  border-bottom-color: white;
}
```
* Style Home Page Paragraph text better and change it

## Styling Login Form
- HAD TO ADD OLD ALPHA CDN TO BOILERPLATE FOR Bootstrap stuff to work that Colt is using...
```html
<div class="container d-flex justify-content-center align-items-center mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-xl-4">
      <div class="card shadow">
        <img src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        alt="" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Login</h5>
          <form action="/login" method="POST" class="validate-form" novalidate>
            <div class="mb-3">
              <label class="form-label" for="username">Username</label>
              <input class="form-control" type="text" id="username" name="username" autofocus required>
              <div class="valid-feedback">
                Looks Good!
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="password">Password</label>
              <input class="form-control" type="password" id="password" name="password" required>
              <div class="valid-feedback">
                Looks Good!
              </div>
            </div>
            <button class="btn btn-success btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

```

## Styling Register Form
- DO SAME TO AS LOGIN FORM
- Make Edit and New Form a little more responsive

## Spacing Campgrounds
- Colt had an error for the `mb-3` --> Mine was find :)

## Removing Inline Map Styles
- Create new style sheet for map styles

## Adding Map Controls
- look in mapBox Docs and find controls you can add to map for users to interact with
* [Display Map Navigation Controls](https://docs.mapbox.com/mapbox-gl-js/example/navigation/)
```js
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
```
- Can tweak and add other items to it - specify position, etc.:
```js
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
```