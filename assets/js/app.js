// app.js – Burger-Menü, schließt bei Linkklick & Escape, verhindert Scrollen
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  if (!header) return;

  const btn  = header.querySelector('.menu-toggle');
  const menu = header.querySelector('#primary-menu');
  if (!btn || !menu) return;

  const closeMenu = () => {
    header.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  btn.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});
