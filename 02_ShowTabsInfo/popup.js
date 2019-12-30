'use strict';

function showTabsInfo({ lastFocusedWindow = false, active = false }) {
  chrome.tabs.query({ lastFocusedWindow, active }, function(tabs) {
    const results = document.querySelector('#results');
    const titles = tabs.map(tab => tab.title);

    results.value = titles.join('\n');
    results.select();
  });
}

showTabsInfo({ lastFocusedWindow: false });

// user can select lastFocusedWindow option
const lastFocusedWindow = document.querySelector('#lastFocusedWindow');

lastFocusedWindow.addEventListener('click', function(e) {
  showTabsInfo({ lastFocusedWindow: e.target.checked });
});


// user can select active option

const active = document.querySelector('#active');

active.addEventListener('click', function(e) {
  showTabsInfo({ active: e.target.checked, lastFocusedWindow: true });
});

