var body_content = document.body.innerText;
var auth_messages = [
    "Authentication details received, processing details. You may close this window at any time.",  // english
    "Authentifizierungsdetails empfangen, Details werden verarbeitet. Sie können dieses Fenster jederzeit schließen.", // german
];

// if the body element only contains the confirmation message above
if(auth_messages.includes(body_content)){
    // send a message to background.js to close the tab
    chrome.runtime.sendMessage({
        command: "close_tab"
    });
}