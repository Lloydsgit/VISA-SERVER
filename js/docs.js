/* ============================================
   DOCS PAGE INTERACTIONS
   ============================================ */

// Sidebar scroll-spy (highlight active section)
const sidebarLinks = document.querySelectorAll('.sidebar-section a');
const sections = Array.from(sidebarLinks)
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if (sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`.sidebar-section a[href="#${entry.target.id}"]`);
        link?.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));
}

// Code example tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    const container = btn.closest('.tab-block');
    container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    container.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    container.querySelector(`.tab-pane[data-tab="${tab}"]`).classList.add('active');
  });
});
