(function() {
  'use strict';

  const links = document.querySelectorAll('a');
  chrome.runtime.sendMessage({ count: links.length }, () => {
    console.log('message sent!');
  });
})();
