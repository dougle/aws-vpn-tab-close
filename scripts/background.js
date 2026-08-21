// listen for messages
chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  // check the message command for a close tab command
  if (request.command === "close_tab") {
    // if there are other tabs in the window, switch to the most recently used
    // one instead of defaulting to the rightmost one
    let otherWindowTabs = await chrome.tabs.query({
      active: false,
      windowId: sender.tab.windowId,
    });
    if (otherWindowTabs.length > 0) {
      let prevTab = otherWindowTabs.reduce((prev, cur) => {
        return prev.lastAccessed > cur.lastAccessed ? prev : cur;
      });
      chrome.tabs.highlight({
        tabs: prevTab.index,
        windowId: prevTab.windowId,
      });
    }

    chrome.tabs.remove(sender.tab.id);
  }
});
