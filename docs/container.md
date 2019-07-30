# Container

Renders containers based on CSS Grid. Alternate method to achieve the same as max-width. Different columns are used, to simulate a max-width. Difference, however, is we can easily breakout elements out of the container, both left or right.

[Example](../examples/container.html)

## Instructions

Import the SCSS for the component:

```scss
@import "keplerstein-component-library/scss/container";
```

There are 2 container mixins to use in your styles. 
Use the SCSS mixins in your styles. Note: these styles are already included in the boilerplate Craft setup.

### Default simple container

The default simple container. One middle column, contained by a max-width.

We always assume the following HTML structure. 
The columns are always the first and last child in the container. (2 children, no more)

```html
<div class="container"><!-- apply mixin to .container -->
    <div class="child">...</div>
</div>
```

```scss
@include container(
    $gutterDefault: 20px, // the default gutter (and thus used on mobile)
    $gutterBreakpoints: ( // the gutters when viewed on bigger screens
        "for-tablet-landscape-up": 50px,
        "for-desktop-up": 140px
    )
    $maxWidth: 1600px,
    $breakpoint: 'for-tablet-landscape-up', // the breakpoint when layout switches from mobile to bigger screens
    $breakout: null // can be 'left', 'right' or 'both'
);
```

### Columns based container

A more elaborate container type, to split the screen in different columns. With this container, we can create the typical breakout asymmetrical layout. 

We always assume the following HTML structure. The columns are always the first and last child in the container. (2 children, no more)

```html
<div class="container"><!-- apply mixin to .container -->
    <div class="child1">...</div>
    <div class="child2">...</div>
</div>
```

```scss
@include columnContainer(
    $columnCount: 16, // number of columns to create in the middle section (gutters do not count)
    $gutterDefault: 20px, // the default gutter (and thus used on mobile)
    $gutterBreakpoints: ( // the gutters when viewed on bigger screens
        "for-tablet-landscape-up": 50px,
        "for-desktop-up": 140px
    )
    $maxWidth: 1600px,
    $breakpoint: "for-tablet-landscape-up", // the breakpoint when layout switches from mobile to bigger screens
    $columnMap: (
        "left": (
            "columnCount": 10, // gutter does not count
            "breakout": false // optional boolean for breaking out
        ),
        "right": (
            "columnCount": 6,
            "breakout": true // optional boolean for breaking out
        )
    )
);
```

