# Button

Renders a basic button style in SCSS. Can be applied to both 'a' and 'button' elements and should look the same on both.

[Example](../examples/button.html)

## Instructions

Import the SCSS for the component:

```scss
@import "keplerstein-component-library/scss/button";
```

Use the SCSS mixin in your styles:

```scss
.my-button {
    
    // renders a default button with some sensible defaults applied
    @include button();
    
    // all the options specified
    @include button(
        $backgroundColor: orange, 
        $color: black,
        $hoverBackgroundColor: red, 
        $padding: 10px 50px
    );
}
```

