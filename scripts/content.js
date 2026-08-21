var dqs = function(sel){return document.querySelector(sel);}

// check for success message, we don't want to close if there is an error to show the user
var v5_auth_message = [
    "Authentication details received, processing details. You may close this window at any time.", // english
    "認証の詳細を受信、詳細を処理中です。このウィンドウをいつでも閉じることができます。", // japanese
    "Authentifizierungsdetails empfangen, Details werden verarbeitet. Sie können dieses Fenster jederzeit schließen.", // german
    "Detalles de autenticación recibidos, se están procesando los detalles. Puede cerrar esta ventana en cualquier momento.", // spanish
    "Informations d'authentification reçues et en cours de traitement. Vous pouvez fermer cette fenêtre à tout moment.", // french
    "Dettagli di autenticazione ricevuti, elaborazione dei dettagli in corso. Puoi chiudere questa finestra in qualsiasi momento.", //italian
    "Detalhes de autenticação recebidos e em processamento. Você pode fechar essa janela a qualquer momento.", // portuguese brazilian
    "인증 세부 정보가 수신되어 세부 정보 처리 중입니다. 언제든지 이 창을 닫을 수 있습니다.", //korean
    "已收到身份验证详细信息，正在处理详细信息。您可以随时关闭此窗口。", // chinese sim
    "收到身分驗證詳細資訊，正在處理詳細資訊。您可以隨時關閉此視窗。", // chinese trad
];
var v6_auth_message = [
    "Authentication successful\n\nYou may now close this browser tab.", // english
    "認証に成功しました\n\nこれで、このブラウザタブを閉じることができます。", // japanese
    "Authentifizierung erfolgreich\n\nSie können diese Browser-Registerkarte nun schließen.", // german
    "Autenticación exitosa\n\nAhora puede cerrar esta pestaña del navegador.", // spanish
    "Authentification réussie\n\nVous pouvez maintenant fermer cet onglet du navigateur.", // french
    "Autenticazione riuscita\n\nOra puoi chiudere questa scheda del browser.", // italian
    "Autenticação com êxito\n\nAgora você pode fechar esta guia do navegador.", // portuguese brazilian
    "인증 성공\n\n이제 이 브라우저 탭을 닫아도 됩니다.", // korean
    "身份验证成功\n\n您现在可以关闭此浏览器选项卡。", // chinese sim
    "身分驗證成功\n\n您現在可以關閉此瀏覽器分頁。", // chinese trad
];

// v5 and v6 confirmation pages differ in structure
var v5_auth = v5_auth_message.includes(dqs('body').innerText);
var v6_auth = (dqs('.header .brand .aws') && v6_auth_message.includes(dqs('.card').innerText));

// if the body element only contains the confirmation message above
if(v5_auth || v6_auth){
    // // send a message to background.js to close the tab
    // chrome.runtime.sendMessage({
    //     command: "close_tab"
    // });
}