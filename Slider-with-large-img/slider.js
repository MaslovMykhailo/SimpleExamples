'use strict';

const width = 35;
const count = 1;

let list = document.getElementById('list');
let listElem = list.querySelectorAll('li');

let position = 0;

function prevfn() {
  position = Math.min(position + width * count, 0);
  list.style.marginLeft = position + '%';
};

function nextfn() {
  position = Math.max(position - width * count, -width * (listElem.length - count - 2));
  list.style.marginLeft = position + '%';
};

prev.addEventListener('click', prevfn);
next.addEventListener('click', nextfn);


list.onclick = function(event) {
  let target = event.target;

  function showSmall(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
  };

  while(target !== this) {

    if(target.tagName === 'A') {
      showSmall(target.href, target.title);
      return false;
    };

    target = target.parentNode;
  };
};

let imgs = list.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
  let url = imgs[i].parentNode.href;

  let img = document.createElement('img');
  img.src = url;
};
