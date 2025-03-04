document.addEventListener("DOMContentLoaded", () => {
    // Typewriter only on index
    if (document.getElementById("typewriter")) {
        const typewriter = document.getElementById("typewriter");
        const text = "Dalton Dole";
        typewriter.textContent = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                typewriter.textContent += text.charAt(i);
                i++;
                setTimeout(type, i === text.length ? 500 : 150);
            } else {
                typewriter.style.borderRight = "none";
            }
        }
        typewriter.style.borderRight = "2px solid var(--golden)";
        type();
    }

    // Skills only on skills.html
    const skills = document.querySelectorAll("#skills-list li");
    if (skills.length) {
        skills.forEach(skill => {
            skill.addEventListener("click", () => {
                skill.classList.toggle("active");
            });
        });
    }

    // Section reveal on all pages
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
