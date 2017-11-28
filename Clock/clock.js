'use strict';

let timer;

class Clock {
  constructor(options) {
    this.container = options.elem;
    this.clockBox = doClockBox();

    let startButton = doButton('Start');
    let stopButton = doButton('Stop');

    this.start = () => {
      timeNow(this.clockBox);

      timer = setInterval(() => {
        timeNow(this.clockBox);
      }, 1000);
    }

    this.stop = () => {
      console.log(timer);
      clearInterval(timer);
    }

    startButton.addEventListener('click', this.start);
    stopButton.addEventListener('click', this.stop);

    append(this.container, this.clockBox, startButton, stopButton);
  }
}

const doClockBox = () => {
  let clock = document.createElement('span');

  clock.className = 'clock';
  clock.innerHTML = '00 : 00 : 00';

  return clock;
}

const doButton = (text) => {
  let button = document.createElement('button');

  button.className = 'button';
  button.textContent = text;

  return button;
}

const timeNow = (elem) => {
  let time = new Date();
  let h = time.getHours() > 9 ? time.getHours() : '0' + time.getHours();
  let m = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
  let s = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();

  let result = `${h} : ${m} : ${s}`;
  elem.innerHTML = result;
}

const append = (parent, ...childs) => {
  childs.forEach(child => {
    parent.appendChild(child);
  });
}