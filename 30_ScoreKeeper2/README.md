# ScoreKeeper App

- Update One Number and not the other (perfect use for span)

- Use a select to create game score options. We will need to make sure there is code that you can't change the winningScore in the middle of the game
  - use change event instead of click

## Bulma
- Another style library that you can use in place of bootstrap etc.
* [BULMA DOCS](https://bulma.io/)
- does not make you depend on jquery or popper.js which are both dependencies of Bootstrap
* UNDER Documentation/Overview/Start - [Find CDN](https://bulma.io/documentation/overview/start/) 
```html
  <!-- USING THIS MIN CDN LINK FOR THIS PROJECT -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
```

* Using Card under Components
* Uses a Grid System - Columns - Basics and Sizes
* halfway across screen = is-half
* h1 has a typography class from bulma, under Helpers - ACTUALLY IT ENDED UP BEING UNDER ELEMENTS/TITLE
* Elements - Buttons in Bulma - For Score Keeping, color and size
* Under Forms in Bulma - Select (for the winningScoreSelect)

* BULMA tells you to wrap everything in a section with a class of section for spacing

* Use color classes under Helpers/Color
* Bulma has built in styles for disabled buttons




