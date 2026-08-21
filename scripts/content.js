var dqs = function(sel){return document.querySelector(sel);}

// v5 and v6 confirmation pages differ
var v5_auth = (document.body.innerText == "Authentication details received, processing details. You may close this window at any time.");
var v6_auth = (dqs('.header .brand .aws') && dqs('.card').innerText == "Authentication successful\n\nYou may now close this browser tab.");

// if the page is definitely the one we want
if(v5_auth || v6_auth){
    // send a message to background.js to close *this* tab
     chrome.runtime.sendMessage({
        command: "close_tab"
    });
}