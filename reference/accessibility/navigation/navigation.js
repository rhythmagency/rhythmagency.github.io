// Get all focusable navigation items.
let elements = document.querySelectorAll("li");

// Add event handlers for blur/focus on each navigation item.
elements.forEach(x => {
    x.addEventListener("blur", function () {
        markActive(x, false);
    });
    x.addEventListener("focus", function () {
        markActive(x, true);
    });
});

// Mark an element (and its ancestors) as active or inactive.
function markActive(element, active) {
    if (!element || !element.tagName) {
        return;
    }
    if (element.tagName.toUpperCase() === "LI") {
        if (active) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    }
    markActive(element.parentNode, active);
}
