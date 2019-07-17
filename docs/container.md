# Container

Renders a container based on an Grid. Alternate method to achieve the same as max-width. Different columns are used, to simulate a max-width. Difference, however, is we can easily breakout elements out of the container, both left or right.

[Example](../examples/container.html)

## Instructions

Import the SCSS for the component:

```scss
@import "keplerstein-component-library/scss/container";
```

Use the SCSS mixins in your styles. Note: these styles are already included in the boilerplate Craft setup.

```scss
    .container-row {
        @include containerRow($maxWidth: 1600px, $gutterMobile: 20px, $gutterMedium: 20px, $gutterBig: 40px);
        .column {
            // places one center column in the middle
            @include containerColumn();
        }
        .breakout-left {
            // breakt out a panel to the left side of the screen. 
            // (Note $gutterMobile should be the same value as the row)
            @include containerColumnBreakoutLeft($gutterMobile: 20px);
        }
        .break-out-left-rest {
            // places an element on the right half of the container. 
            // (so maybe use it to fill out the remainging space left by a breakout element
            @include containerColumnRight();
        }

        .breakout-right {
            // breakt out a panel to the right side of the screen. 
            // (Note $gutterMobile should be the same value as the row)
            @include containerColumnBreakoutRight($gutterMobile: 20px);
        }

        .breakout-right-rest {
            // places an element on the left half of the container. 
            // (so maybe use it to fill out the remainging space left by a breakout element
            @include containerColumnLeft();
    }
}
```

Parameters:
- $maxWidth: The max width of the container. If the width of the screen is less than $maxWidth, $gutterMedium or $gutterBig is applied to the left and right, dependant of the screen size.
- $gutterMobile: The gutter left and right when viewing on a phone. (breakout elements break out, even on mobile!)
