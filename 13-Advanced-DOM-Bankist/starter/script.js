'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//create cookie
const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
// header.append(message);

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// smooth scrolling

const scrollBtn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

function scrollTo() {
  section1.scrollIntoView({ behavior: 'smooth' });
}

scrollBtn.addEventListener('click', scrollTo);

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();

    //matching strategy
    if (event.target.classList.contains('nav__link')) {
      const id = event.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

// tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (event) {
  event.preventDefault();
  const clicked = event.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;

  //remove active class from every button
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  // add active class to clicked button
  clicked.classList.add('operations__tab--active');

  //remove active class from every content block
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );

  // add active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// navbar blend  in and blend out

const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// const initialCoordss = section1.getBoundingClientRect();
// console.log(initialCoordss);
// //stick navigation
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoordss.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// function obsCallback(entries, observer) {
//   entries.forEach(entry => console.log(entry));
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

function stickyNav(entries, observer) {
  if (!entries[0].isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const stickyOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // height of the navigation bar, adds a visual margin between target and navbar
};

const headerObserver = new IntersectionObserver(stickyNav, stickyOptions);

headerObserver.observe(header);

// reveal sections
// const sections = document.querySelectorAll('.section');

// function revealSection(entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// }
// const revealOptions = { root: null, threshold: 0.15 };

// const sectionsObserver = new IntersectionObserver(revealSection, revealOptions);

// sections.forEach(section => {
//   sectionsObserver.observe(section);
//   section.classList.add('section--hidden');
// });

//lazy loading
const imgTargets = document.querySelectorAll('img[data-src]');

function loadImg(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  /// element which is intersecting / first entry in the console
  entry.target.src = entry.target.dataset.src;
  // listen for the load event which happens in the background while javascript is chancing the img
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

const imgOptions = {
  root: null, // null means the entire viewport / console
  threshold: 0,
  rootMargin: '200px',
};

const imgObserver = new IntersectionObserver(loadImg, imgOptions);

imgTargets.forEach(img => imgObserver.observe(img));

function slider() {
  // Slider elements

  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  // Global variables
  let currentSlide = 0;
  const maxSlide = slides.length;

  //functions

  function createDots() {
    slides.forEach((_slide, index) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot dots__dot--active" data-slide="${index}"></button>`
      );
    });
  }

  function changeActive(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }

  function goToSlide(slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  function nextSlide() {
    if (maxSlide - 1 === currentSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    changeActive(currentSlide);
  }

  function previousSlide() {
    if (0 === currentSlide) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    changeActive(currentSlide);
  }

  function init() {
    createDots();
    changeActive(0);
    goToSlide(0);
  }

  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function (event) {
    // console.log(event);
    if (event.key === 'ArrowRight') {
      nextSlide();
    }
    if (event.key === 'ArrowLeft') {
      previousSlide();
    }
  });

  dotContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('dots__dot')) {
      const slide = event.target.dataset.slide;
      goToSlide(slide);
      changeActive(slide);
    }
  });
}

slider();
