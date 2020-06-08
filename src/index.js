import './sass/main.scss';
import refs from './js/refs';
import data from './js/list-data';
import './js/send-form'

let markup = '';
const placeholder = 'Выберите тип';
let dataForSecondStep = '';
let dataForThirdStep = '';

function createMarkup(data) {
  let index = 0;
  let markupDropdownList = '';
  data.forEach(element => {
    markupDropdownList += `<li class="dropdown--item" data-index="${index}">${element.name}</li>`;
    index += 1;
  });
  markup = `<button class="service-selection--button">${placeholder}</button><ul class="dropdown--list">${markupDropdownList}</ul>`;
}

function createFirstList(data) {
  createMarkup(data);
  refs.serviceSelectionList.insertAdjacentHTML(
    'beforeend',
    `<div>${markup}</div>`,
  );
  refs.serviceSelectionList.lastChild.addEventListener(
    'click',
    onFirstListClick,
  );
}

function onFirstListClick(e) {
  if (e.target.nodeName === 'BUTTON') {
    e.currentTarget.lastChild.classList.toggle('show');
  }
  if (e.target.nodeName === 'LI') {
    e.currentTarget.lastChild.classList.toggle('show');
    dataForSecondStep = data[e.target.getAttribute('data-index')].children;
    createSecondList(dataForSecondStep);

    e.currentTarget.firstChild.textContent = e.target.textContent;
  }
}

function createSecondList(data) {
  createMarkup(data);
  if (refs.serviceSelectionList.firstChild.classList.contains('checked')) {
    refs.serviceSelectionList.children[1].innerHTML = markup;
    if (refs.serviceSelectionList.children[2]) {
      refs.serviceSelectionList.children[2].innerHTML = '';
    }
    return;
  }
  refs.serviceSelectionList.insertAdjacentHTML(
    'beforeend',
    `<div>${markup}</div>`,
  );
  refs.serviceSelectionList.firstChild.classList.add('checked');
  refs.serviceSelectionList.lastChild.addEventListener(
    'click',
    onSecondListClick,
  );
}

function onSecondListClick(e) {
  if (e.target.nodeName === 'BUTTON') {
    e.target.nextElementSibling.classList.toggle('show');
  }
  if (e.target.nodeName === 'LI') {
    e.target.parentElement.classList.toggle('show');
    dataForThirdStep =
      dataForSecondStep[e.target.getAttribute('data-index')].nephews;
    createthirfList(dataForThirdStep);
    e.currentTarget.firstChild.textContent = e.target.textContent;
  }
}

function createthirfList(data) {
  createMarkup(data);
  if (refs.serviceSelectionList.children[1].classList.contains('checked')) {
    refs.serviceSelectionList.lastChild.innerHTML = markup;
    return;
  }
  refs.serviceSelectionList.insertAdjacentHTML(
    'beforeend',
    `<div>${markup}</div>`,
  );
  refs.serviceSelectionList.children[1].classList.add('checked');
  refs.serviceSelectionList.lastChild.addEventListener(
    'click',
    onThirdListClick,
  );
}

function onThirdListClick(e) {
  if (e.target.nodeName === 'BUTTON') {
    e.target.nextElementSibling.classList.toggle('show');
  }
  if (e.target.nodeName === 'LI') {
    refs.serviceSelectionList.children[2].classList.add('checked');
    e.target.parentElement.classList.toggle('show');
    refs.serviceNameRef.value = e.target.textContent
    refs.bannerRef.classList.add('hidden');
    refs.orderRef.classList.remove('hidden');
  }
}

createFirstList(data);

window.onclick = e => {
  const element = e.target.classList;
  if (
    !element.contains('service-selection--button') &&
    !element.contains('dropdown--item')
  ) {
    const openList = document.querySelector('.show');
    if (openList) {
      openList.classList.remove('show');
    }
  }
};
