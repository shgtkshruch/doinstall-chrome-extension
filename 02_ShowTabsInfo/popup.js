'use strict';

chrome.tabs.query({}, function(tabs) {
  tabs.forEach(tab => {
    console.log(tab.title);
  });
});
