export default function() {
    console.log("initializing button");

    document.querySelectorAll(".sample-button").forEach(function(tmp) {
        tmp.addEventListener("click", function() {
            alert("Button clicked");
        });
    });
}
