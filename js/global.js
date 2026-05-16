/* ============================================
   GLOBAL INTERACTIONS
   ============================================ */

// Mobile menu toggle
document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('mobile-open');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// TOC active-state highlighting on scroll
const tocLinks = document.querySelectorAll('.toc a');
if (tocLinks.length) {
  const sections = Array.from(tocLinks).map(link =>
    document.querySelector(link.getAttribute('href'))
  ).filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.toc a[href="#${entry.target.id}"]`);
        activeLink?.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));
}

// Fade-in on scroll
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('animate-in');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-on-scroll').forEach(el => fadeObserver.observe(el));
