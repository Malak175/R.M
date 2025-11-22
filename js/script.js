// Year
document.getElementById('year').textContent = new Date().getFullYear();

// AOS Animation
AOS.init({
  duration: 1200,
  easing: 'ease-out-cubic',
  once: true
});

// Smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! (Demo mode)');
  e.target.reset();
});