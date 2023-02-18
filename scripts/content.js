var body_content = document.body.innerText;
var auth_message = "Authentication details received, processing details. You may close this window at any time.";

// if the body element only contains the confirmation message above
if(body_content == auth_message){
    // send a message to background.js to close the tab
    chrome.runtime.sendMessage({
        command: "close_tab"
    });
}