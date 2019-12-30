'use strict';

const saveBtn = document.querySelector('#save');

saveBtn.addEventListener('click', function() {
  const color = document.querySelector('#colors').value;
  chrome.storage.sync.set({ color }, () => {
    console.log('saved: ' + color);
  });
});
