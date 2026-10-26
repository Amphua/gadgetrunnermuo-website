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

const gallery = document.querySelector('[data-gallery]');

if (gallery) {
   const galleryImage = gallery.querySelector('.gallery-main-image');
   const galleryTitle = gallery.querySelector('.gallery-title');
   const galleryDescription = gallery.querySelector('.gallery-description');
   const galleryCount = gallery.querySelector('.gallery-count');
   const galleryCurrent = gallery.querySelector('[data-gallery-current]');
   const galleryProgress = gallery.querySelector('.gallery-progress span');
   const galleryThumbnails = [...gallery.querySelectorAll('[data-gallery-slide]')];
   let currentSlide = 0;

   const showSlide = (index) => {
      currentSlide = (index + galleryThumbnails.length) % galleryThumbnails.length;
      const thumbnail = galleryThumbnails[currentSlide];
      const image = thumbnail.querySelector('img');
      const slideNumber = String(currentSlide + 1).padStart(2, '0');

      galleryImage.src = image.src;
      galleryImage.alt = thumbnail.dataset.alt;
      galleryTitle.textContent = thumbnail.dataset.title;
      galleryDescription.textContent = thumbnail.dataset.description;
      galleryCount.textContent = `${slideNumber} / ${String(galleryThumbnails.length).padStart(2, '0')}`;
      galleryCurrent.textContent = slideNumber;
      galleryProgress.style.width = `${((currentSlide + 1) / galleryThumbnails.length) * 100}%`;

      galleryThumbnails.forEach((button, buttonIndex) => {
         button.setAttribute('aria-pressed', String(buttonIndex === currentSlide));
      });
   };

   gallery.querySelector('[data-gallery-previous]').addEventListener('click', () => showSlide(currentSlide - 1));
   gallery.querySelector('[data-gallery-next]').addEventListener('click', () => showSlide(currentSlide + 1));

   galleryThumbnails.forEach((button, index) => {
      button.addEventListener('click', () => showSlide(index));
   });

   gallery.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
         event.preventDefault();
         showSlide(currentSlide - 1);
      } else if (event.key === 'ArrowRight') {
         event.preventDefault();
         showSlide(currentSlide + 1);
      }
   });

   let touchStartX = null;

   gallery.querySelector('.gallery-stage').addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0].screenX;
   }, { passive: true });

   gallery.querySelector('.gallery-stage').addEventListener('touchend', (event) => {
      if (touchStartX === null) return;

      const swipeDistance = event.changedTouches[0].screenX - touchStartX;
      touchStartX = null;

      if (Math.abs(swipeDistance) > 50) {
         showSlide(currentSlide + (swipeDistance < 0 ? 1 : -1));
      }
   }, { passive: true });
}