# Bootstrap Forms
- [FORMS](https://getbootstrap.com/docs/4.5/components/forms/)
  - Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms 

  - Important Basics
    - `class= form-control`
    - `class= form-group` : combines label and input
  
  - CHECKBOXES : `class= form=-heck`
  - [CUSTOM CHECKBOXES](https://getbootstrap.com/docs/4.5/components/forms/#custom-forms)
  ```html
  <!-- DEFAULT BROWSER CHECKBOX -->
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">
        Default checkbox
      </label>
    </div>

    <!-- CUSTOM CHECKBOX | slight difference | hover, rounded corners, etc. -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheck1">
      <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
    </div>
  ```

  - RADIO : CUSTOM RADIOs, etc. like Checkboxes
  - CUSTOM SELECT
  - CUSTOM RANGE INPUT
  
  ### CREATING FORM LAYOUTS
    - USE GRID SYSTEM