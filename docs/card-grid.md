# Card grid

Renders a series of card in a grid style layout, using flex. (ex. Newsposts, Products, etc.)

[Example](../examples/card-grid.html)

## Instructions

Import the SCSS for the component:

```scss
@import "keplerstein-component-library/scss/card-grid";
```

Use the SCSS mixin in your styles:

```html
 <div class="card-grid">
    <div class="card">card 1 </div>
    <div class="card">card 2 </div>
    ...
    <div class="card">card n </div>
</div>   
```

```scss
.card-grid {
    @include cardGrid(
        $defaultRowGutter: 10px,
        $breakpoints: (
            "for-tablet-portrait-up": (
                "columns": 2,
                "rowGutter": 20px,
                "columnGutter": 20px
            ),
            "for-tablet-landscape-up": (
                "columns": 3,
                "rowGutter": 30px,
                "columnGutter": 30px
            ),
            "for-desktop-up": (
                "columns": 4,
                "rowGutter": 40px,
                "columnGutter": 40px
            ),
            "for-big-desktop-up": (
                "columns": 5,
                "rowGutter": 40px,
                "columnGutter": 40px
            )
        )
    );

    // other card wrapper styles

    .card {
        // other card styles
        background: palegoldenrod;
        padding: 20px;
    }
}
```
