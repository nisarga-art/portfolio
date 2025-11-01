// ===== Section Navigation =====
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");

    // Hide all sections
    sections.forEach(section => section.classList.add("hidden"));
    sections.forEach(section => section.classList.remove("active"));

    // Show the clicked section
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.classList.remove("hidden");
    targetSection.classList.add("active");

    // Smooth scroll to section
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
