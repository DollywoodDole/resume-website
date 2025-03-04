documendocument.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll("#skills li");
    skills.forEach(skill => {
        skill.addEventListener("click", () => {
            skill.style.backgroundColor = "#ff6b6b";
            skill.style.color = "white";
        });
    });
});