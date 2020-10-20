# BOOTSTRAP UTILITIES
- BORDER : COLOR AND RADIUS
- SHADOW

## SPACING

**Notation**
- Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

- The classes are named using the format `{property}{sides}-{size}`  and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`.

**Where property is one of:**

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

**Where sides is one of:**

- `t` - for classes that set `margin-top` or `padding-top`
- `b` - for classes that set `margin-bottom` or `padding-bottom`
- `l` - for classes that set `margin-left` or `padding-left`
- `r` - for classes that set `margin-right` or `padding-right`
- `x` - for classes that set `both *-left` and `*-right`
- `y` - for classes that set `both *-top` and `*-bottom`
- blank - for classes that set a `margin` or `padding` on all 4 sides of the element

**Where size is one of:**

- `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
- `1` - (by default) for classes that set the `margin` or `padding` to `$spacer * .25`
- `2` - (by default) for classes that set the `margin` or `padding` to `$spacer * .5`
- `3` - (by default) for classes that set the `margin` or `padding` to `$spacer`
- `4` - (by default) for classes that set the `margin` or `padding` to `$spacer * 1.5`
- `5` - (by default) for classes that set the `margin` or `padding` to `$spacer * 3`
- `auto` - for classes that set the `margin` to auto
(You can add more sizes by adding entries to the `$spacers` `Sass map variable`.

    - m, p
    - which side, t,b,r,l,x(left&right),y(top&botom)
    - 0 - least/none amount 5-most, different levels based of REMs
      0 = remove,none
      3 = 1rem
      5 = 3rem

## DISPLAY
- `.d-{value}` for xs
- `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, and `xl`.
Where value is one of:

- none
- inline
- inline-block
- block
- table
- table-cell
- table-row
- flex
- inline-flex
- The display values can be altered by changing the `$displays` variable and recompiling the SCSS.

## CARDS
- LOTS AND LOTS you can do with cards
- replaced, thumbnails, wells, etc.
- can add headers and footers

## CAROUSEL 
- make image slider/gallery and such
- lots of javascript behind scenes
- connect controls, carousel-control, data-slide, data-ride

## DROPDOWN
- Dropdown Menus - attach to buttons, pop up, down, right, left

## SPINNER
- Border spinner, growing spinner

## MODAL
- pop-up dialogs
- lots a javacript
- what should launch it, what should close it
- scroll-able in container or where entire page scrolls



