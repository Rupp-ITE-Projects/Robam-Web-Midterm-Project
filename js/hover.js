const indicator = document.getElementById("nav-indicator");
const links = document.querySelectorAll(".nav-link");
const menu = document.getElementById("nav-menu");

indicator.style.opacity = "0";

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        const rect = link.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();

        indicator.style.opacity = "1";

        indicator.style.width = `${rect.width}px`;
        indicator.style.height = `${rect.height}px`;

        indicator.style.left =
            `${rect.left - menuRect.left}px`;

        indicator.style.top =
            `${rect.top - menuRect.top}px`;
    });

});

menu.addEventListener("mouseleave", () => {
    indicator.style.opacity = "0";
});