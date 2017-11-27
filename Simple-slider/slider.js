'use strict';

const width = 225;
const count = 3;

let list = document.getElementById('list');
let listElem = list.querySelectorAll('li');

let position = 0;

function prevfn() {
  position = Math.min(position + width * count, 0);
  list.style.marginLeft = position + 'px';
};

function nextfn() {
  position = Math.max(position - width * count, -width * (listElem.length - count));
  list.style.marginLeft = position + 'px';
};

prev.addEventListener('click', prevfn);
next.addEventListener('click', nextfn);