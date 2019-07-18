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
    @include containerRow(
        $maxWidth: 1600px,
        $columns: 2,
        $gutterMobile: 20px,
        $gutterMedium: 20px,
        $gutterBig: 40px
    );

    .column {
        // Places one center column in the middle
        // Note: $columns should be the same value as the row)
        @include containerColumn($columns: 2);
    }

    .breakout-left {
        // Break out a panel to the left side of the screen.
        // Note: $columns should be the same value as the row)
        // Note 2: $gutterMobile should be the same value as the row)
        @include containerColumnBreakoutLeft($columns: 2, $gutterMobile: 20px);
    }

    .break-out-left-rest {
        // places an element on the right half of the container.
        // (so maybe use it to fill out the remainging space left by a breakout element
        // Note: $columns should be the same value as the row)
        @include containerColumnRight($columns: 2);
    }

    .breakout-right {
        // Break out a panel to the right side of the screen.
        // Note: $columns should be the same value as the row)
        // Note 2: $gutterMobile should be the same value as the row)
        @include containerColumnBreakoutRight($columns: 2, $gutterMobile: 20px);
    }

    .breakout-right-rest {
        // Places an element on the left half of the container.
        // (so maybe use it to fill out the remainging space left by a breakout element
        @include containerColumnLeft($columns: 2);
    }
}
```

Parameters:

-   **$maxWidth**: The max width of the container. If the width of the screen is less than $maxWidth, $gutterMedium or $gutterBig is applied to the left and right, dependant of the screen size.
-   **$columns**: The amount of columns you want your container to be. Must **always** be an **even number**.
-   **$gutterMobile**: The gutter left and right when viewing **phone**.
-   **$gutterMedium**: The gutter left and right when viewing on a **portrait up**.
-   **$gutterBig**: The gutter left and right when viewing on a **landscape up**.

