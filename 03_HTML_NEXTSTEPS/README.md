# HTML Next Steps

## Crucial 

### * Understanding what HTML5 Actually is
### * Block vs. Inline Elements
### * `<span>` vs `<div>` elements
### * Semantic Elements

<br>

## Nice to Have

### * VSCode Tip: Emmet
### * `<sub>` elements
### * `<hr>` elements
### * `<sup>` elements
### * `<br>` Elements

<br>

## Notes

<hr>

### * Understanding what HTML5 Actually is
  - [MDN HTML5 REF](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - Refers to new stuff in HTML
    - And refers to a bundle of new stuff for the browser
    - Not all HTML

  - Living Standard
    - The HTML standard is a document that descirbes how HTML should work.
    - [HTML SPEC](https://html.spec.whatwg.org/)
  - Role of Browsers
    - The standard describes the rules of HTML, but browsers actually have to do the work and implement HTML according to those rules.
  - HTML5?
    - HTML5 is the latests evolution of the standard that defines HTML. It includes new elements & features for browsers to implement

### * Block vs. Inline Elements
  - Inline
    - Elements fit in alongside other elements
    - ie., `<a>` tags, `<img>` tags
    - `<span>`
  - Block Level
    - Elements take up te whoel "block" of space
    - i.e., headings, `<p>` tags
    - `<div>`
### * `<span>` vs `<div>` elements
  - SPAN
    - another genereic container
    - INLINE Element - used to single out content 
    - can use `CSS` to style those elements
  - DIV
    - The Content Division element
    - the generic container to hold things or group elements together
    - no effect on the content or layout until style using `CSS`
    - BLOCK LEVEL Element

### * VSCode Tip: Emmet
  - shortend sytanx you can use to create html elements
  - [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

### * `<sub>` elements
  - The Subscript element
  - text rendered below the baseline
  - chemical formulas is chemistry
  - fractions

### * `<hr>` elements
  - The Thematic Break (Horizontal Rule) element
  - by default makes a line going accross the screen horizontally
  - like a divider
  - no closing tag
  - can also use borders to get a similar effect

### * `<sup>` elements
  - The Superscript element
  - elevated off the baseline
  - like and exponent, on wikipedia: the citations

### * `<br>` Elements
  - The Line Break element
  - makes a break in your content
  - one situation where it can be useful
    - you have a poem and you want to make a line break specfically
  - not commonly used

### HTML ENTITIES
  - WTF is `&#9824;` : &#9824;
  - Special codes or sequences we can use inside our HTML that will result in different characters : Most that are not easy to type on a keyboard
  - [ENITY CODE REF](https://entitycode.com/)
  - HOW TO USE
    - Start with an ampersnad and end with a semicolon : inside is a string of characters
    - Used to display reserved characters that normally would be invalid
    - Also used in place of difficult to type characters
    - The browser interprets them and renders the correct character instead

### * Semantic Elements
  - Semantic Markup
    - Semantic : relating to meaning
    - Meaningful Markup
    - What purpose or role does that HTML element have
  - Newer Elements to HTML all behave just like divs to add meaning to our markup
      - `<main>` : dominate content of the body of a page, not repetable content like nav bars
      - `<header>` : introductory content : can have more than one
      - `<footer>` : can have more than one 
      - `<section>` : grouping of content, represents a stadalone section
      - `<nav>` : represents anything on the page that are navigation links 
      - `<article>` : a self-contained compostion within a document, page, app or site, independently distribuitable or reusable, can have more than one article on a page and sub articles, like a weather widget : should have a heading
      - `<aside>` : not essential or indirectly related to document
      - `<summary>`
      - `<details>`
      - `<time>` : call something out as time in a machine readble formation use attribute `datetime="2018-07-07"`
      - `<figure>` : represents a self-contained element with an optional caption : illustration : diagram : that you want to call attention to
      - abrevationa and data elements
  - there are time and date elements, instead of just generic span or paragaraph
  - make it more crawlable, more friendly to other application or to other code
  - accesiblity : make it more accessible to people using screen readers 
  - makes your own code more navigable for yourself and other developers
  - also essentail for SEO





  