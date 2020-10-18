# SECTION

## Crucial 

### * Element Selector
### * Class Selector
### * ID Selector
### * Descendent Selector
### * CSS Specificity

<br>

## Important 

### * Adjacent Selector
### * Direct Descendent Selector
### * Attribute Selector
### * Pseudo Elements
### * Pseudo Classes 

<br>

## Nice to Have

### * 

<br>

## Notes

<hr>

### Coolors Color Palette Website
  - [Trending Color Palettes](https://coolors.co/palettes/trending)

### Universal and Element Selectors

I. UNIVERSAL SELECTOR
  - select everything!
  - not commonly used
  ``` css
    * {
      color: black;
    }
  ```
II. ELEMENT SELECTOR
  - select everything of a given type
  - extremely common 
  ```css
    img {
      width: 100px;
      height: 100px;
    }
  ```

III. SELECTOR LIST
  - use comma to combine multiple selectors in a list
  ```css
    h1, h2 {
      color: magenta;
    }
  ```

IV. ID SELECTOR
  - Selects an element with a given ID. ONLY ONE PER PAGE
  - Can have multiple IDs on page but only can appear once
  - way to target one individual element
  - Unique Identifier 
  --------------------------------------------------------
  - add a hook to element using | id="logout"
  - refer to it in CSS using octothorpe before as selector | #logout
  ```css
    #logout {
      color: orange;
      height: 200px;
    }
  ```

V. CLASS SELECTOR
  - Selects all elements with a given class 
  - add hook to element using | class="complete"  
  - refer to it in CSS using dot/period | .complete
  - just a sticker or label on whatever elements you want to return to later
  ```css
    .complete {
      color: green;
    }
  ```

VI. DESCENDANT SELECTOR
  - use and see all the time
  - take two or more selectors/tag names and chain them together
  - elements nested inside another 
  - can be easy to give a parent element a class and use that as our reference
  ```css 
  /* Select all <a>'s that are nested inside an <li> */
  li a {
    color: red; 
  }
  ``` 

VII. ADJACENT SELECTOR
  - select elements that come after another element
  - not nested inside 
  - select sibling on same level
  - these are called combonator

  ``` css
  /* Select only that paragraphs that are immediately preceded by an <h1> */
    h1 + p {
      color: red;
    }
  ```
VIII. DIRECT CHILD 
  - direct child combonator/ direct descendent of an element
  ```css
  /* Select only the <li>'s that are direct children of a <div> element */
    div > li {
      color: white;
    }
  ```  

IX. ATTRIBUTE SELECTOR
  - Attribute Selector
  - select elements based off of any attribute
  - all inputs of particular type(i.e. checkboxes, passwords, etc.), all images of particular src, all anchors of a particular href

  ```css
    /*Select all anchor tags with an href of google.com*/
    a[href*="http://www.google.com"] {
      background: blue;
    }
    /*Select all input elements where the type attribute is set to "text"*/
    input[type="text"] {
      width: 300px;
      color: yellow; 
    }
  ```

X. PSEUDO CLASSES | ARE STATES
  - keyword added to a selector that specifies a special state of the selected element
    - :active
    - :checked
    - :first
    - :first-child
    - :hover
    - :not()
    - :nth-child()
    - :nth-of-type()


  ---- nth-of-type() -------------
    - takes number and selects nth of a specific element
    - every 5th div, every 2nd li, tenth paragraph on page, etc.

    ```css
    /* select final ul in exercise */

    ul:nth-of-type(3) {
      background: purple;
    }

    li:nth-of-type(even) {
      background: green;
    }

    ```
 
XI. PSEUDO ELEMENTS | ARE THINGS
  - keyword added to a selector that lets you style a particular part of selected element(s) 
    - ::after
    - ::before
    - ::first-letter
    - ::first-line
    - ::selection
  
### CSS SPECIFICITY

#### THE CASCADE
- The order your styles are declared in and linked to matters!
```css
  h1 {
    color: red;
  }
  h1 {
    color: purple;
  }

  /* PURPLE WINS!*/
```
- When link two css files, it will cascade over first then the next and order things are declared in file will matter, styles in second will be applied if they override any in the first
#### SPECIFICTY
  - [THE SPECIFICITY CALCULATOR](https://specificity.keegan.st/)
  - how the browser decides which rules to apply when there is a conflict
  - INHERITANCE: child elements inherit properties of the parent element
  - can override inherited styles
  - multiple styles targeting one element
  - which ever element is more specific will win out
    - ELEMENT SELECTORS and TAGS | not very specific
    - CLASS | much more specific
    - ID | most specific
    ```css
    /* Element Selector: 001 */
      p {
        color: yellow;
      }

    /*Element Selector + Element Selector*/
    /*More Specific: 002*/

    section p {
      color: teal;
    }

    ```
    - 0 | ID SELECTORS
    - 0 | CLASS, ATTRIBUTE, & PSEUDO-CLASS SELECTORS
    - 2 | ELEMENT and PSEUDO-ELEMENT SELECTORS

  ```css
   /* 100 */
   #submit {
     color: olive;
   }
  ```
    - 1 | ID SELECTORS
    - 0 | CLASS, ATTRIBUTE, & PSEUDO-CLASS SELECTORS
    - 0 | ELEMENT and PSEUDO-ELEMENT SELECTORS

  ```css
   /* 012 */
   nav a.active {
     color: orange;
   }
  ```
    - 0 | ID SELECTORS
    - 1 | CLASS, ATTRIBUTE, & PSEUDO-CLASS SELECTORS
    - 2 | ELEMENT and PSEUDO-ELEMENT SELECTORS
  
#### CHROME DEV TOOLS
- use to inspect elements
- can checkout styles and use to troubleshoot and see what is being applied and overridden
- search for styles/filter and use .hov, etc. 

#### INLINE STYLES
- MORE SPECIFIC than any other SELECTOR
- but you still want to avoid it

#### !important
- the important rule is something we can use on individual style declarations, generally don't want to use this
- single to browser that this is the most specific thing and should override any other styles
- can be useful if you are using someone elses library and need to override

#### INHERITANCE
- child elements inherit properties of the parent element
- certain elements do not inherit automatically (form contorls)





 