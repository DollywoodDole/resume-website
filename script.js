document.addEventListener("DOMContentLoaded", () => {
    // Typewriter effect with flourish
    const typewriter = document.getElementById("typewriter");
    const text = "Dalton Dole";
    typewriter.textContent = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, i === text.length ? 500 : 150); // Pause at end
        } else {
            typewriter.style.borderRight = "none"; // Remove cursor
        }
    }
    typewriter.style.borderRight = "2px solid var(--golden)";
    type();

    // Skill toggle
    const skills = document.querySelectorAll("#skills-list li");
    skills.forEach(skill => {
        skill.addEventListener("click", () => {
            skill.classList.toggle("active");
        });
    });

    // Nav highlight and smooth scroll
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Section reveal on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});
