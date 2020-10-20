# BOOTSTRAP GRID SYSTEM
- Bootstrap comes with a grid system, which helps us construct our own custom, responsive layouts.
- division of space may change depending on a screen size

### [GRID SYSTEM REF](https://getbootstrap.com/docs/4.5/layout/grid/)
- need to put elements in container
  - need to put into row | every row has 12 units of space of divvy up
    - create columns in rows
    - `class="col"`
    - can define units, 


### RESPONSIVE LAYOUT
- shift content around and create responsive layouts based on screen size
- BUILT IN BREAKPOINTS - `col-sm`, `col-md`, `col-lg`, `col-xl`
```html
    <div class="row">
      <!-- after medium breakpoint and up you should take 6 units -->
      <!-- before they will stack -->
      <div class="col-md-6 bg-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor assumenda dolore autem sint nam perferendis nobis quam eligendi neque illo, aut saepe blanditiis quidem nihil architecto in quas aliquid!
      </div>
      <div class="col-md-6 bg-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor assumenda dolore autem sint nam perferendis nobis quam eligendi neque illo, aut saepe blanditiis quidem nihil architecto in quas aliquid!
      </div>
    </div>
 ```   

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

### IMG-FLUID
- Images in Bootstrap are made responsive with `.img-fluid`. `max-width: 100%`; and `height: auto`; are applied to the image so that it scales with the parent element.

### DISPLAY UTILITIES AND FLEX
**TWO-DIRECTIONS/AXIS**
- by default MAIN AXIS of content is from LEFT to RIGHT
  - start of our flexbox is on left side the end is on the right
- CROSS AXIS | CROSS DIRECTION | from TOP to BOTTOM
  - start of cross-axis is at top and the end of the bottom

1. JUSTIFY CONTENT | MAIN AXIS | DEFAULT LEFT-->RIGHT
- `justify-content-start` or `flex-start` (DEFAULT) - everything starts at the left in the container

- `justify-content-end` or `flex-end` - move everything to left
- `justify-content-center` or `center` - move everything in container to the center
- `justify-content-between` or `space-between` - space between items
- `justify-content-around` or `space-around` - space between end of container and items
- `space-evenly` - space evenly around all elements

- can specify for sm, md, lg, xl

2. ALIGN ITEMS | CROSS AXIS | DEFAULT TOP-->BOTTOM

- `align-items-stretch` (DEFAULT) - takes up all the space
- `align-items-start` or `flex-start` - refer to CROSS AXIS (TOP OF CONTAINER), move to top
- `align-items-center` - move to center along cross axis
- `align-items-end` or `flex-end` - bottom of container
- `baseline` - text sets baseline to move content around on


3. FLEX-DIRECTION
  - default direction
    - left to right | MAIN AXIS
    - top to bottom | CROSS AXIS

  - `flex-row-reverse` - right to left - content main axis content-start at the right
  - `flex-column` - items stack vertically, working from top to bottom as MAIN AXIS and CROSS AXIS is now left to right
  - `flex-row` is DEFAULT
  - `flex-column-reverse` - MAIN AXIS = BOTTOM to TOP

  - align-self : align one item




