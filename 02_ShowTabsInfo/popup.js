'use strict';

chrome.tabs.query({}, function(tabs) {
  const results = document.querySelector('#results');
  const titles = tabs.map(tab => tab.title);

  results.value = titles.join('\n');
  results.select();
});
