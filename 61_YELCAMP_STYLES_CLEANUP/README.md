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

## Styling Register Form

## Spacing Campgrounds

## Removing Inline Map Styles

## Adding Map Controls