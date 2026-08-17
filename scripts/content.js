var body_content = document.body.innerText;

// AWS VPN Client up to 5.4.x served the confirmation as a bare text body
var auth_message = "Authentication details received, processing details. You may close this window at any time.";

// AWS VPN Client 6.x serves a styled success page instead: a header with the
// AWS VPN Client branding, and a card holding a green checkmark, an <h1> title
// and a <p> subtitle. All three strings are localised by the client, so match
// on the structure rather than on the wording.
var success_card = document.querySelector(".card h1");

// error responses from the 6.x callback listener ("Bad Request", "Request too
// large") are still plain text, so they have no card and stay open
if(body_content == auth_message || success_card !== null){
    // send a message to background.js to close the tab
    chrome.runtime.sendMessage({
        command: "close_tab"
    });
}
