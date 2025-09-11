// Smooth scroll for navigation buttons
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dark / Light mode toggle with localStorage
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// ✅ Default dark mode
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark");
}

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  html.classList.remove("dark");
  themeToggle.textContent = "🌙";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  const mobileNav = document.getElementById('mobile-nav');
  mobileNav.classList.toggle('hidden');
});

// Project view toggle
document.querySelectorAll('.view-project-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const id = 'project-' + btn.dataset.project;
    const details = document.getElementById(id);
    if (details) {
      details.classList.toggle('hidden');
      if (!details.classList.contains('hidden')) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
});

// ---------- Typewriter Animation ----------
const textEl = document.getElementById("animated-text");
const animatedText = "Passionate developer creating production-ready Android & iOS apps, building modern, efficient, and beautiful mobile experiences.";
const typingSpeed = 80; 
const pauseDelay = 1500; 

let charIndex = 0;

function typeWriter() {
  if (charIndex < animatedText.length) {
    textEl.innerHTML += animatedText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(() => {
      textEl.innerHTML = "";
      charIndex = 0;
      typeWriter();
    }, pauseDelay);
  }
}

// Start the typewriter animation
typeWriter();