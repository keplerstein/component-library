# Snippets

## Freeform AJAX success message

The default Freeform success message when using AJAX is not clear. We use a diffferent approach and hide the form instead.

### Backpanel
Be sure that AJAX is enabled on your form.
<img src="images/snippets/form-settings.png" style="width: 300px; display: block;">

### HTML
Make sure you wrap your `success-message` and your form in one div. We'll use this node to look for the closest `success-message` and show it whenever the form has been successfuly sent. Also notice that the freeform snippet uses `form` as the classname. This will be used in the Javascript part.

```twig
    <div class="my-wrapper">
        <div class="success-message">
            Uw bericht is met succes verstuurd!
        </div>
        {{ craft.freeform.form("contact", {
            class: "form",
            instructionsBelowField: true
        }).render() }}
    </div>
```
### Javascript
In the following snippet we loop through all forms with the classname `form`. Whenever the form is successfully sent, the script will remove the form from the DOM and wil display the success message with (in this case) the class `success-message`.

```js
    let forms = Array.from(document.querySelectorAll(".form"));

    forms.forEach(form => {
        form.addEventListener("freeform-ready", function(event) {
            var freeform = event.target.freeform;
            freeform.addOnSuccessfulAjaxSubmit((evt, form, response) => {
                var parent = form.parentNode;
                var message = parent.querySelector(".success-message");
                message.style.display = "block";
                parent.removeChild(form);
            });
        });
    });
```