// listen for messages
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    // check the message command for a close tab command
    if (request.command === "close_tab")
        // find the currently active tab
        chrome.tabs.query({ active: true }, function(tabs) {
            // close the found tab
            chrome.tabs.remove(tabs[0].id);
        });
    }
);