const menu = document.querySelector('#menu-btn');
const navbarLinks = document.querySelector('.header .navbar .links');
const themeToggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

const setTheme = (theme) => {
   root.dataset.theme = theme;
   const isDark = theme === 'dark';
   themeToggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
   themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
   themeToggle.title = `Switch to ${isDark ? 'light' : 'dark'} mode`;
};

setTheme(localStorage.getItem('gadget-runner-theme') || 'light');

themeToggle.addEventListener('click', () => {
   const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
   localStorage.setItem('gadget-runner-theme', nextTheme);
   setTheme(nextTheme);
});

menu.addEventListener('click', () => {
   const isOpen = navbarLinks.classList.toggle('active');
   menu.classList.toggle('fa-times', isOpen);
   menu.classList.toggle('fa-bars', !isOpen);
   menu.setAttribute('aria-expanded', String(isOpen));
   menu.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navbarLinks.querySelectorAll('a').forEach((link) => {
   link.addEventListener('click', () => {
      navbarLinks.classList.remove('active');
      menu.classList.remove('fa-times');
      menu.classList.add('fa-bars');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation menu');
   });
});

window.addEventListener('scroll', () => {
   const isScrolled = window.scrollY > 60;
   document.querySelector('.header').classList.toggle('scrolled', isScrolled);
   document.querySelector('.header .navbar').classList.toggle('active', isScrolled);
});