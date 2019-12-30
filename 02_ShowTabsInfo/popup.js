'use strict';

function showTabsInfo({ lastFocusedWindow = false }) {
  chrome.tabs.query({ lastFocusedWindow }, function(tabs) {
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
