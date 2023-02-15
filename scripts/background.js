chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.command === "close_tab")
        chrome.tabs.query({ active: true }, function(tabs) {
             chrome.tabs.remove(tabs[0].id);
        });
  }
);