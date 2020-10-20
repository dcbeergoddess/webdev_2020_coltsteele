# Bootstrap Navbars
- one of the signature bootstrap components 

- [NAVBAR DOCUMENTATION](https://getbootstrap.com/docs/4.5/components/navbar/)

- `bg-light` and `bg-dark` : apply to text NOT BACKGROUND

- COLLAPSE
  - More control where the breakpoint for the collapse happens
    - `.navbar-expand`
  - `navbar-light` or `navbar-dark`
  - must set background
  - toggler
  - no longer `margin bottom` added or `border-radius`

- FLEXBOX
  - Use flex utilities to move items around
  - Display is automatically set to FLEX
  - by default everything in FLEX starts a ROW (MAIN AXIS left to right)
  - nav class = flexbox enabled
    - `justify content around`
  - vertical nav
    - `flex-column`

- MAKING NAVBARS FIXED to screen, etc. 
  - default navbar goes away as you scroll
  - `fixed-top`
  - `fixed-bottom`
  - `sticky-top` : like fixed but if you add content before nav it'll be before nav but as you scroll the nav bar gets stuck to top and it'll stay there