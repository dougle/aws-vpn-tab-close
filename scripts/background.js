// listen for messages
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
//    console.log(sender);
    // check the message command for a close tab command
    if (request.command === "close_tab")
        // empty query gets all tabs from all windows
        chrome.tabs.query({}, function(tabs) {
//            console.log(tabs);
            // loop through all tabs in all windows
            for (let i = 0; i < tabs.length; i++) {
//                console.log("comparing tab", tabs[i], sender.tab);
                // compare the current tab to the tab that sent the message
                if (tabs[i].id == sender.tab.id)
                    // close the found tab
//                    console.log("closing tab", tabs[i]);
                    chrome.tabs.remove(tabs[i].id);

            }
        });
    }
);