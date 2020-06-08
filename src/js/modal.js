import refs from './refs'

const closeModalBtn = document.querySelector(
  'button[data-action="close-modal-error"]',
);
const backdropRef = document.querySelector('.js-backdrop');

closeModalBtn.addEventListener('click', onCloseModal);
backdropRef.addEventListener('click', onBackDropClick);

function onOpenModal() {
  window.addEventListener('keydown', onPressEscape);
  document.body.classList.add('show-modal');
  refs.modalRef.classList.remove('hidden')
}

function onCloseModal() {
  window.removeEventListener('keydown', onPressEscape);
  document.body.classList.remove('show-modal');
  refs.modalErrorRef.classList.add('hidden')
  refs.modalResultRef.classList.add('hidden')
}

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onPressEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

export { onOpenModal };
