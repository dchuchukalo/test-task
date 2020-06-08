import refs from './refs';
import { onOpenModal } from './modal';

refs.orderFormRef.addEventListener('submit', onSubmitClick);

function onSubmitClick() {
  event.preventDefault();
  onOpenModal();
  if (!validation()) {
    refs.modalErrorRef.classList.remove('hidden');
    return;
  }
  insertResult();
  refs.modalResultRef.classList.remove('hidden');
}

function validation() {
  if (refs.serviceNameRef.value.length === 0) {
    return;
  }
  if (refs.nameSurnameRef.value.length === 0) {
    return;
  }
  if (
    refs.emailRef.value.length === 0 ||
    refs.emailRef.validity.patternMismatch
  ) {
    return;
  }
  if (
    refs.phoneNumder.value.length === 0 ||
    refs.phoneNumder.validity.patternMismatch
  ) {
    return;
  }
  return true;
}

function insertResult() {
  const refsValueArr = [
    refs.serviceNameRef.value,
    refs.serviceDescriptionRef.value,
    refs.nameSurnameRef.value,
    refs.emailRef.value,
    refs.phoneNumder.value,
  ];

  const markup = createMarkup(refsValueArr).join('');
  refs.modalResultRef.innerHTML = markup
}

function createMarkup(arr) {
  return arr.map(e => {
    if (e.length === 0) {
      return
    }
    return `<p>${e}</p>`;
  });
}
