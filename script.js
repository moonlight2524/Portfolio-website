function toggleMenu() {
    document.getElementById("nav-list").classList.toggle("active");
}


const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Toggle between sun and moon icon
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon
    }
});

const sections = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 }); // Trigger when 30% of the section is visible

sections.forEach(section => observer.observe(section));