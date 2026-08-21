var dqs = function(sel){return document.querySelector(sel);}

var v5_auth_message = [
    "Authentication details received, processing details. You may close this window at any time.", // english
    "認証の詳細を受信、詳細を処理中です。このウィンドウをいつでも閉じることができます。", // japanese
    "Authentifizierungsdetails empfangen, Details werden verarbeitet. Sie können dieses Fenster jederzeit schließen.", // german
];

var v6_auth_message = [
    "Authentication successful\n\nYou may now close this browser tab.", // english
];

// v5 and v6 confirmation pages differ
var v5_auth = v5_auth_message.includes(dqs('body').innerText);
var v6_auth = (dqs('.header .brand .aws') && v6_auth_message.includes(dqs('.card').innerText));


// if the body element only contains the confirmation message above
if(v5_auth || v6_auth){
    // send a message to background.js to close the tab
    chrome.runtime.sendMessage({
        command: "close_tab"
    });
}