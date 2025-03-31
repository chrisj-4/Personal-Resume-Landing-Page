// Theme toggle (light/dark mode)
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Skill list toggle
document.getElementById("skillToggle").addEventListener("click", function() {
    const skillList = document.getElementById("skillList");
    skillList.classList.toggle("hidden");
});
