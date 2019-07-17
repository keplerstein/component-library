# Base styles

## Reset & normalization

We provide some basic resets (normalize scss) with an added layer of our own reset scss.

## Breakpoints

We provide a couple of mobile-first media queries. The sample below shows them all.

```scss
.breakpoints {
    background-color: yellow; // Mobile
    
    @include for-tablet-portrait-up {
        background-color: orange;
    }

    @include for-tablet-landscape-up {
        background-color: orangered;
    }

    @include for-desktop-up {
        background-color: red;
    }

    @include for-medium-desktop-up {
        background-color: purple;
    }

    @include for-big-desktop-up {
        background-color: blue;
    }

}
```