'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
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

// IMPLEMENTING SMOOTH SCROLLING

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y', window.pageXOffset, window.pageYOffset);
  console.log(
    'Height/Width',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // Current position + Current Scroll
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // To specify smooth scrolling, we need to specify an object with the left and top coordinates, as well as behaviour, in this case 'smooth'.

  // Old School way of scrolling where we want to:
  // Works on all browsers

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // New school way of scrolling where we want to:
  // Only works in modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});
//////////////////////////////////////////////////////////////////
//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// EVENT DELEGATION
// 1. Add Event Listener to common Parent Element
// 2. Determine which element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy
  // 1. Check if the target element coontains the class we are interested in. We do this to ignore clicks outside of the elements we aren't directly interested in.
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////////////
const header = document.querySelector('.header');

const buttons = document.getElementsByTagName('button');

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analystics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.before(message);
// // header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // // Styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '104.2%';

// console.log(message.style.width);

// console.log(getComputedStyle(message).height);

// // console.log(
// //   (message.style.height =
// //     Number.parseFloat(getComputedStyle(message).height) + 80 + 'px')
// // );

// // CSS custom properties/variables

// // document.documentElement.style.setProperty('--color-primary', 'blue');

// // ATTRIBUTES
// // src, alt, class, id, are all atributes of HTML elements

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.src);

// // Altering atributes
// logo.alt = 'Beautiful example';
// console.log(logo.alt);

// // Get the custom atribute of an element
// console.log(logo.getAttribute('designer'));

// // Set a new custom attribute to an element
// logo.setAttribute('teacher', 'Jonas Poopman');
// console.log(logo.getAttribute('teacher'));

// // Absolute and Relative versions of src
// console.log(logo.src); //Absolute
// console.log(logo.getAttribute('src')); //Relatice

// // Data attributes
// // Data attributes are attributes that start with the word data
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('x', 'c'); //We can add multiple classes
// logo.classList.remove('x');
// logo.classList.toggle('x');
// logo.classList.contains('x');

// // Don't use
// logo.className = 'jonas';

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('Click the h1 tage to turn this message off');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert('You just hovered over the h1 tag, congratulations!!! 2');
// };

// const h1 = document.querySelector('h1');

// // Going downwards: Child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'blue';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going Sideways: Siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el != h1) el.style.transform = 'scale(0.5)';
// });

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
