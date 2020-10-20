
# BOOTSTRAP

## Crucial 

### * WTF is Bootstrap
### * Working with CSS Frameworks
### * Including 3rd party CSS & CDNS

<br>

## Important 

### * Bootstrap Grid
### * Responsive Bootstrap Grid
### * Bootstrap Navbars

<br>

## Nice to Have

### * Icons
### * Typography and Utilities
### * Bootstrap Forms
### * Bootstrap Buttons

<br>

## Notes

<hr>

**CSS FRAMEWORKS** 
BOOTSTRAP : COMPONENTS & GRID SYSTEM
  - using CLASSES for COMPONENTS

- [BOOTSTRAP DOCUMENTATION](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
- [GRID SYSTEM](https://getbootstrap.com/docs/4.5/layout/grid/)

1. CONTAINER 
    - most basic layout element in Bootstrap and are required when using the default grid system.
    a. `.container` : sets a `max-width` at each responsive breakpoint (predefined)
    b. `.container-fluid` : is `width: 100%` at all breakpoints
    d. `.container-{breakpoint}` : is `width: 100%` until the specified breakpoint 
    - RESPONSIVE:
    ```html
      <div class="container-sm">100% wide until small breakpoint</div>
      <div class="container-md">100% wide until medium breakpoint</div>
      <div class="container-lg">100% wide until large breakpoint</div>
      <div class="container-xl">100% wide until extra large breakpoint</div>
    ```
    - Layout - Responsive Breakpoints

    ```css
    // Extra small devices (portrait phones, less than 576px)
    // No media query for `xs` since this is the default in Bootstrap

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) { ... }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { ... }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { ... }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { ... }
    ```
2. BUTTONS 
- [BUTTON DOCUMENTATION](https://getbootstrap.com/docs/4.5/components/buttons/)

3. SEMANTIC COLORS IN BOOTSTRAP
  - [COLOR UTILITIES](https://getbootstrap.com/docs/4.5/utilities/colors/)
  - primary, secondary, success, danger, etc.
  - can change them - more semantic/meaning 

4. TYPOGRAPHY 
  - [Typography in BOOTSTRAP](https://getbootstrap.com/docs/4.5/content/typography/)
  - **DISPLAY HEADINGS**
  ```html
  <h1 class="display-1">Display 1</h1>
  <h1 class="display-2">Display 2</h1>
  <h1 class="display-3">Display 3</h1>
  <h1 class="display-4">Display 4</h1>
  ```
  - **LEAD**
    - Make a paragraph stand out by adding `class="lead"`
    - changes `font-size` and `font-weight`
  - BLOCKQUOTES
    - quoting block of content from another source within your document. Wrap `<blockquote class="blockquote>` around any HTML as the quote

5. **UTILITIES**
  - [BOOTSTRAP UTILITIES](https://getbootstrap.com/docs/4.5/utilities/borders/)

6. **BADGES**
  - [BADGE COMPONENT](https://getbootstrap.com/docs/4.5/components/badge/)
  - `<h1>Example heading<span class="badge badge-secondary">NEW</span></h1>`
  - can use it to count, label, etc.

7. **BUTTON GROUP**
  - [BUTTON GROUP COMPONENT](https://getbootstrap.com/docs/4.5/components/button-group/)
  - group buttons together
  - accessibility: `role="group"` (tells screen reader group of buttons)  
  ```html
  <!-- BASIC EXAMPLE -->
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary">Left</button>
      <button type="button" class="btn btn-secondary">Middle</button>
      <button type="button" class="btn btn-secondary">Right</button>
    </div>
  ```
8. **ALERTS**
  - [ALERT COMPONENT](https://getbootstrap.com/docs/4.5/components/alerts/)
  - bring users attention to some piece of information
  ```html
    <div class="alert alert-primary" role="alert">
        A  simple primary alert—check it out!
    </div>
  ```
  - make alert dismissible
  - using role and aria labels so make accessible to screen readers
  ```html
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  ```

<br>

## BOOTSTRAP NOTES FROM OLD VERSION

<hr>

  - Bootstrap is the most popular HTML, CSS and JS framework for developing responsive, mobile first projects on the web

  - most starred and forked library on Github
      - a single file of CSS and a single file of Javascript
      - include in our own application
      - helps us make good looking websites quickly

  - Great Documentation

## CDN 
  - Content Delivery Network

# BOOTSTRAP 4 LINKS

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
```

- alpha release: first release
- beta release: more polished
- stable release: things should work

## NOTES FROM COLT

### BOOTSTRAP COLORS

- contextual colors classes
  - danger, warning, info, primary, success
  - text, alerts
  - default values
- THEMES

- UTILITIES - COLORS (can get classes for colors)

  - text-light
  - text-primary
  - etc.

- Background classes
  - bg-primary

### BOOTSTRAP TYPOGRAPHY

- \_utilities.scss (more advanced to change)

- .page-header removed - have utilities to add border, padding, margin utilities

- .display-1 (to 4, slightly more opinionated hading styles)

  - based off rem

- blockquotes
  - classes in addition to blockquote tag
  - citations in footers for referencing stuff

### FONT UNITS

- PX to REM
  - REM - Relative EM
  - Top Level HTML in Bootstrap 16px (element.style)
    1 rem = 16px x 1

### UTILITY CLASSES

- for common CSS property value-pairs and margin/padding pacing shortcuts
- BORDERS
  - add borders using classes, or subtract borders
  - change color using classes
  - border radius, rounded, etc.

#### SPACING

```
Notation
Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl.

Where property is one of:

m - for classes that set margin
p - for classes that set padding
Where sides is one of:

t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
l - for classes that set margin-left or padding-left
r - for classes that set margin-right or padding-right
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element
Where size is one of:

0 - for classes that eliminate the margin or padding by setting it to 0
1 - (by default) for classes that set the margin or padding to $spacer * .25
2 - (by default) for classes that set the margin or padding to $spacer * .5
3 - (by default) for classes that set the margin or padding to $spacer
4 - (by default) for classes that set the margin or padding to $spacer * 1.5
5 - (by default) for classes that set the margin or padding to $spacer * 3
auto - for classes that set the margin to auto
(You can add more sizes by adding entries to the $spacers Sass map variable.
```

    - m, p
    - which side, t,b,r,l,x(left&right),y(top&botom)
    - 0 - least/none amount 5-most, different levels based of REMs
      0 = remove,none
      3 = 1rem
      5 = 3rem

### Breakpoints | Responsive

- Layout - Responsive Breakpoints

```css
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

```
``` html
    <div class="container text-center">
        <h1 class="display-3">Breakpoints</h1>
        <button class="btn btn-warning p-sm-5 p-md-0 p-lg-5 p-xl-0">BUTTON</button>
        <button class="btn btn-danger p-0 p-sm-2 p-md-3 p-lg-4 p-xl-5">BUTTON</button>
        <button class="btn btn-success p-0 pl-sm-5 pt-md-5 pr-lg-5 pb-xl-5">BUTTON</button>
        
        <h1>Margin Example</h1>
        <button class="btn btn-primary p-4 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5">Hi</button>
        <button class="btn btn-primary p-4 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5">Hi</button>
        <button class="btn btn-primary p-4 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5">Hi</button>
        <button class="btn btn-primary p-4 mx-0 mx-sm-2 mx-md-3 mx-lg-4 mx-xl-5">Hi</button>
    </div>
```
### BOOTSTRAP 4 NAVBAR

- More control where the breakpoint for the collapse happens
  - .navbar-expand
- entirely rewritten in flexbox
- navbar-light or navbar-dark
- don't have to override as much
- must set background
- toggler
- no longer margin bottom added or border-radius

### DISPLAY UTILITY
- Responsive utilities
  - hidden and visiblit utilites no longer
  - using d instead

``` css
Notation
Display utility classes that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0; and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

.d-{value} for xs
.d-{breakpoint}-{value} for sm, md, lg, and xl.
Where value is one of:

none
inline
inline-block
block
table
table-cell
table-row
flex
inline-flex
The display values can be altered by changing the $displays variable and recompiling the SCSS.

The media queries affect screen widths with the given breakpoint or larger. For example, .d-lg-none sets display: none; on both lg and xl screens.
```

### FLEXBOX

- Exists outside of Bootstrap but we are going to be using it inside of Bootstrap
- Grid System in Bootstrap 4 moved to flexbox

- a Model for positioning content within a box 

- You don't have to take advantage of it
- FLEX UTILITIES IN BOOTSTRAP
  - Includes CSS properties to move items around

``` html
<div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>

```
- Make Container a "flex-able" box | d-flex

### FLEXBOX AND NAVS

- Use flex utilities to move items around

- Display is automatically set to FLEX

- by default everything in FLEX starts a ROW (MAIN AXIS left to right)

- nav class = flexbox enabled
  - justify content around

- vertical nav
  - flex-column


### RESPONSIVE GRID

- GRID SYSTEM - DOCUMENTATION IN BOOTSTRAP 4
  - 

### CARDS

- LOTS AND LOTS you can do with cards
- replaced, thumbnails, wells, etc.
- can add headers and footers

### GRID ALIGNMENT
- WHEN USE GRID
- make container of sorts
  - make row
  - make col


IMG-FLUID
- makes height 100% abnd height auto

ASSIGN ORDER IN BOOTSTRAP
- order-(GIVE IT A NUMBER)
- order-2 (goes second)
- order-md-1 (define order at different sizes)
  


