'use strict';

const saveBtn = document.querySelector('#save');
const colors = document.querySelector('#colors');
const text = document.querySelector('#text');

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
    text.textContent = "saved!";
    console.log('saved: ' + color);
  });
});
