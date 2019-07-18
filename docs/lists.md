# Lists

This mixin provides default list stylings for 'ol' and 'ul' lists. To be used in, for example, WYSIWYG editor rendered content.

[Example](../examples/lists.html)

## Instructions

Import the SCSS for the component:

```scss
@import "keplerstein-component-library/scss/lists";
```

Use the SCSS mixin in your styles:

```scss
.my-list {
    // Renders all lists within .my-list with the styling applied
    // (default values used)
    @include lists();
    
    // All options specified. Values can be unitless (defaults to px)
    @include lists(
        $marginLeft: 30,
        $marginBottom: 20px
    );
}
```

