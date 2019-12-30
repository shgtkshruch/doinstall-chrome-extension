'use strict';

const colors = document.querySelector('#colors');

colors.addEventListener('change', function() {
  chrome.tabs.executeScript({
    code: `document.body.style.backgroundColor = "${this.value}";`
  });
});
