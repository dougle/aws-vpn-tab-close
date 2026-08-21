var dqs = function(sel){return document.querySelector(sel);}

// check for success message, we don't want to close if there is an error to show the user
var v5_auth_message = [
    "Authentication details received, processing details. You may close this window at any time.", // english
    "認証の詳細を受信、詳細を処理中です。このウィンドウをいつでも閉じることができます。", // japanese
    "Authentifizierungsdetails empfangen, Details werden verarbeitet. Sie können dieses Fenster jederzeit schließen.", // german
    "Detalles de autenticación recibidos, se están procesando los detalles. Puede cerrar esta ventana en cualquier momento.", // spanish
    "Informations d'authentification reçues et en cours de traitement. Vous pouvez fermer cette fenêtre à tout moment.", // french
];
var v6_auth_message = [
    "Authentication successful\n\nYou may now close this browser tab.", // english
    "これで、このブラウザタブを閉じることができます。", // japanese
    "Sie können diese Browser-Registerkarte nun schließen.", // german
    "Ahora puede cerrar esta pestaña del navegador.", // spanish
    "Vous pouvez maintenant fermer cet onglet du navigateur.", // french
];

// v5 and v6 confirmation pages differ in structure
var v5_auth = v5_auth_message.includes(dqs('body').innerText);
var v6_auth = (dqs('.header .brand .aws') && v6_auth_message.includes(dqs('.card').innerText));

// if the body element only contains the confirmation message above
if(v5_auth || v6_auth){
    // send a message to background.js to close the tab
    chrome.runtime.sendMessage({
        command: "close_tab"
    });
}