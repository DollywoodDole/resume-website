document.addEventListener("DOMContentLoaded", () => {
    // Typewriter effect for name
    const typewriter = document.getElementById("typewriter");
    const text = typewriter.textContent;
    typewriter.textContent = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, 200); // Slower for gravitas
        }
    }
    type();

    // Skill highlight with toggle
    const skills = document.querySelectorAll("#skills-list li");
    skills.forEach(skill => {
        skill.addEventListener("click", () => {
            const isActive = skill.style.backgroundColor === "rgb(199, 153, 0)"; // Golden in RGB
            if (isActive) {
                skill.style.backgroundColor = "var(--off-white)";
                skill.style.color = "var(--dark-grey)";
            } else {
                skill.style.backgroundColor = "var(--golden)";
                skill.style.color = "var(--dark-grey)";
            }
        });
    });
});
