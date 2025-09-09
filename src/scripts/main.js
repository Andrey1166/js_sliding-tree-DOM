'use strict';

const tree = document.querySelector('.tree');
const lists = [...document.querySelectorAll('ul')];

lists.forEach((list) => {
  const parentLi = list.closest('li');
  const span = document.createElement('span');

  if (parentLi) {
    span.textContent = parentLi.firstChild.textContent;
    span.setAttribute('class', 'header');
    parentLi.firstChild.textContent = '';
    parentLi.prepend(span);
    console.log(parentLi);
  }
});

tree.addEventListener('click', (e) => {
  const header = e.target.closest('.header');

  if (!header) {
    return;
  } else{
    listHandler(header);
  }
  console.log(header.nextElementSibling.clientHeight);
});

function listHandler(item) {
  const list = item.nextElementSibling;

  if (list.clientHeight > 0) {
    list.style.height = '0';
    list.style.opacity = '0';
    list.pointerEvent = 'none';
  } else {
    list.style.height = '100%';
    list.style.opacity = '1';
    list.pointerEvent = 'all';
  }
}
