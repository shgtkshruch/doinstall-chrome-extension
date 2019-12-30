'use strict';

const saveBtn = document.querySelector('#save');
const colors = document.querySelector('#colors');

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get({
    color: 'red'
  }, (item) => {
    colors.value = item.color;
  });
});

saveBtn.addEventListener('click', function() {
  const color = colors.value;
  chrome.storage.sync.set({ color }, () => {
    console.log('saved: ' + color);
  });
});
