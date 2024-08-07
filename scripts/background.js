// listen for messages
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
//        console.log(request, sender);
        // check the message command for a close tab command
        if (request.command === "close_tab")
            chrome.tabs.remove(sender.tab.id);

    }
);