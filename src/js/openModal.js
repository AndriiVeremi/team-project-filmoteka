const modalWindow = document.querySelector('.');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.');
const btnOpenModal = document.querySelectorAll('.');

const modal = function () {
  modalWindow.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

btnOpenModal.addEventListener('click', modal);
btnCloseModal.addEventListener('click', modal);
overlay.addEventListener('click', modal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal();
  }
});
