var body_content = document.body.innerText;
var auth_message = "Authentication details received, processing details. You may close this window at any time.";

console.log(body_content);
if(body_content == auth_message){
    chrome.runtime.sendMessage({
        command: "close_tab"
    });
}