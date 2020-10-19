# SECTION

## Crucial 

### * TRANSITIONS
### * POSITION PROPERTY

<br>

## Important 

### * OPACITY AND ALPHA CHANNEL
### * GOOGLE FONTS
### * THE FULL STORY ON THE BACKGROUND PROPERTY

<br>

## Nice to Have

### * TRANSFORMS

<br>

## Notes

<hr>

### Opacity & Alpha Channel
- both have to do with transparency

####  ALPHA | RGBA

- Just like RGB, but with alpha (transparency) channel. Ranges from 0.0-1.0

```css
h1 {
  color: rgb(11, 99, 150, 1);
  /* transparency: none, full alpha */
}
h2 {
  color: rgb(11, 99, 150, .6);
  /* transparency: more */
}
h3 {
  color: rgb(11, 99, 150, .2);
  /* transparency: most, barley visible */
}
```

#### ALPHA & HEXADECIMAL
- add on two digits to number
- 00-FF, 00 = Full Transparency, FF = No Transparency
- Can see number in color picker via VSCode if you want to play around with it
- RGBA easier to use and see how transparent an element is in your code

#### OPACITY
- CSS property that sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency
- goes from 0-1 (0 = completely transparent, 1 = no transparency)
- [MDN REFERENCE](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
_ **EXAMPLE FOR TEXT**
```html
  <div class="light">You can barely see this.</div>
  <div class="medium">This is easier to see.</div>
  <div class="heavy">This is very easy to see.</div>
```
```css
  div { background-color: yellow; }
  .light {
    opacity: 0.2; /* Barely see the text over the background */
  }
  .medium {
    opacity: 0.5; /* See the text more clearly over the background */
  }
  .heavy {
    opacity: 0.9; /* See the text very clearly over the background */
  }
```
- **EXAMPLE FOR :HOVER**
```html
  <img src="//developer.mozilla.org/static/img/opengraph-logo.png"
  alt="MDN logo" width="128" height="146"
  class="opacity">
```
```css
  img.opacity {
    opacity: 1;
    filter: alpha(opacity=100); /* IE8 and lower */
    zoom: 1; /* Triggers "hasLayout" in IE 7 and lower */
  }

  img.opacity:hover {
    opacity: 0.5;
    filter: alpha(opacity=50);
    zoom: 1;
  }
```

<hr>

### POSITION
- [MDN REFERENCE]()
- sets how an element is positioned in a document. The `top`, `right`, `bottom`, `left` properties determine the final location of positioned elements.
  - STATIC
  - RELATIVE
  - ABSOLUTE
  - FIXED
  - STICKY

#### Static
- Element Positioned according to the Normal Flow of the document
- The `top`, `right`, `bottom`, `left`, `z-index` properties have _no_ effect
- THIS IS THE DEFAULT VALUE

#### Relative
- Element Positioned according to the Normal Flow of the document 
  - and then offset _relative to itself_ based on the values of `top`, `right`, `bottom`, `left`
- The offset does not affect the position of any other elements; thus the space fiven for the element in the page payout is the same as if the position were `static`

#### Absolute
- Element Removed from the normal document flow, and no space is created for the element in the page layout
- Positioned Relative to its closest Positioned Ancestor (if any) || Placed Relative to the initial _containing block_
- Final Position : determined by values of `top`, `right`, `bottom`, `left`

#### FIXED
- Element Removed from the normal document flow, and no space is created for the element in the page layout
- Positioned Relative to the initial _containing block_ established by the _viewport_, except when one of its ancestors has a `transform`, `perspective`, or `filter` property set to something other than `none` | then the Ancestor behaves as the _containing block_ 
- Final Position : determined by values of `top`, `right`, `bottom`, `left`

#### STICKY
- Where something begins not fixed to the top, but then gets fixed later

<hr>

### Transitions
- More than one css property (like border)
- Animate the transition of one property value to another property value
- good to use in JS when adding and removing classes, etc
- [USING CSS TRANSITIONS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [EASING FUNCTION CHEAT SHEET](https://easings.net/)
- TRANSITION: PROPERTY NAME | DURATION | TIMING FUNCTION | DELAY
```css
  /* Apply to 1 property */
  /* property name | duration */
  transition: margin-right 4s;

  /* property name | duration | delay */
  transition: margin-right 4s 1s;

  /* property name | duration | timing function */
  transition: margin-right 4s ease-in-out;

  /* property name | duration | timing function | delay */
  transition: margin-right 4s ease-in-out 1s;

  /* Apply to 2 properties */
  transition: margin-right 4s, color 1s;

  /* Apply to all changed properties */
  transition: all 0.5s ease-out;

  /* Global values */
  transition: inherit;
  transition: initial;
  transition: unset;
```

<hr>

### Transform
- CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
```css
    /* Keyword values */
    transform: none;

    /* Function values */
    transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: perspective(17px);
    transform: rotate(0.5turn);
    transform: rotate3d(1, 2.0, 3.0, 10deg);
    transform: rotateX(10deg);
    transform: rotateY(10deg);
    transform: rotateZ(10deg);
    transform: translate(12px, 50%);
    transform: translate3d(12px, 50%, 3em);
    transform: translateX(2em);
    transform: translateY(3in);
    transform: translateZ(2px);
    transform: scale(2, 0.5);
    transform: scale3d(2.5, 1.2, 0.3);
    transform: scaleX(2);
    transform: scaleY(0.5);
    transform: scaleZ(0.3);
    transform: skew(30deg, 20deg);
    transform: skewX(30deg);
    transform: skewY(1.07rad);

    /* Multiple function values */
    transform: translateX(10px) rotate(10deg) translateY(5px);
    transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);
```
#### ROTATE
  - CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. Its result is a `<transform-function>` data type.
  - The fixed point that the element rotates around — mentioned above — is also known as the transform origin. This defaults to the center of the element, but you can set your own custom transform origin using the `transform-origin` property.
#### SCALE
- CSS function defines a transformation that resizes an element on the 2D plane. Because the amount of scaling is defined by a vector, it can resize the horizontal and vertical dimensions at different scales. Its result is a `<transform-function>` data type
#### SKEW
- CSS function defines a transformation that skews an element on the 2D plane. Its result is a `<transform-function>` data type.
  - skew(ax)
  - skew(ax, ay)


### MORE ON: Background
- Can use IMAGES
- `background-image` | can also be a gradient
- `background-size` | ways to size image
- `background-position` | where image starts

- `background` | shorthand property
- if using `background-size` it MAY ONLY be included immediately AFTER `position`, separated with the '/' charger like this: "center/80%
- not limited to one background
```css
  /* Using a <background-color> */
  background: green;

  /* Using a <bg-image> and <repeat-style> */
  background: url("test.jpg") repeat-y;

  /* Using a <box> and <background-color> */
  background: border-box red;

  /* A single image, centered and scaled */
  background: no-repeat center/80% url("../img/image.png");
```
<hr>

### Google Fonts
- [GOOGLE FONTS WEBSITE](https://fonts.google.com/)
- Can include a font file
- Find one on Google Fonts, can select font weights you want to include and then grab link from `embed` and come `link` tag
- Include fonts in CSS style sheet, can add to `body` or other elements where you want to affect

### WHITE SPACE
- images on same line, if you put on separate line you would have a white space that would effect the images layout on the page
- FLEXBOX MAKES THIS A NON ISSUE



