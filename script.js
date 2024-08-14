document.addEventListener("DOMContentLoaded", function() {
    const words = ["WEB DESIGN", "LOGO DESIGN", "GRAPHIC DESIGN", "PRODUCT DESIGN", "& MORE"];
    let index = 0;
    const changingWordElement = document.getElementById("changing-word");

    setInterval(function() {
        index = (index + 1) % words.length;
        changingWordElement.textContent = words[index];
    }, 2000); // Change word every 2 seconds
});
