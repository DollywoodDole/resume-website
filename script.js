document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add hover effect to projects
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("mouseover", () => {
            project.style.transform = "scale(1.05)";
        });
        project.addEventListener("mouseout", () => {
            project.style.transform = "scale(1)";
        });
    });

    // Dynamic year update in footer
    const footer = document.querySelector("footer p");
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} Dalton Ellscheid. All rights reserved.`;
    }
});
