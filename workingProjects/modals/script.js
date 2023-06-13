'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// OPEN MODAL
for (let i = 0; i < buttonsOpenModal.length; i++)
  buttonsOpenModal[i].addEventListener('click', openModal);

// CLOSE MODAL - ON CLICK
buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// CLOSE MODAL - ON KEY PRESS
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
