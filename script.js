document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "var(--deep-red)";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "var(--golden)";
        });
    });

    console.log("Resume website loaded successfully.");
});
