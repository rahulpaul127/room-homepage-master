const slidesData = [
  {
    title: "Discover innovative ways to decorate",
    description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imageDesktop: "./images/desktop-image-hero-1.jpg",
    imageMobile: "./images/mobile-image-hero-1.jpg"
  },
  {
    title: "We are available all across the globe",
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imageDesktop: "./images/desktop-image-hero-2.jpg",
    imageMobile: "./images/mobile-image-hero-2.jpg"
  },
  {
    title: "Manufactured with the best materials",
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imageDesktop: "./images/desktop-image-hero-3.jpg",
    imageMobile: "./images/mobile-image-hero-3.jpg"
  }
];

// Slider logic
let currentSlide = 0;

const heroDesktop = document.getElementById('hero-desktop');
const heroMobile = document.getElementById('hero-mobile');
const heroTitle = document.getElementById('hero-title');
const heroDescription = document.getElementById('hero-description');

const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');

function updateSlide(index) {
  const slide = slidesData[index];
  heroDesktop.srcset = slide.imageDesktop;
  heroMobile.src = slide.imageMobile;
  
  // Add a slight fade effect
  heroTitle.style.opacity = '0';
  heroDescription.style.opacity = '0';
  
  setTimeout(() => {
    heroTitle.textContent = slide.title;
    heroDescription.textContent = slide.description;
    heroTitle.style.opacity = '1';
    heroDescription.style.opacity = '1';
  }, 200);
}

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slidesData.length - 1 : currentSlide - 1;
    updateSlide(currentSlide);
  });
});

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentSlide = (currentSlide === slidesData.length - 1) ? 0 : currentSlide + 1;
    updateSlide(currentSlide);
  });
});

// Mobile Nav Logic
const navToggle = document.querySelector('.mobile-nav-toggle');
const navCloseBtn = document.querySelector('.nav-close-btn');
const header = document.querySelector('.primary-header');
const navBackdrop = document.querySelector('.nav-backdrop');
const nav = document.querySelector('nav');

function openNav() {
  navToggle.setAttribute('aria-expanded', 'true');
  header.setAttribute('data-overlay', 'true');
  nav.classList.add('active');
  navBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navToggle.setAttribute('aria-expanded', 'false');
  header.setAttribute('data-overlay', 'false');
  nav.classList.remove('active');
  navBackdrop.classList.remove('active');
  document.body.style.overflow = 'auto';
}

navToggle.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
navBackdrop.addEventListener('click', closeNav);
