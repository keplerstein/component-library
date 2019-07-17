# Base styles

## Reset & normalization

Blabla.

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