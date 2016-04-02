/// <reference path="../../typings/main.d.ts" />
'use strict';

chrome.runtime.onInstalled.addListener(details => {
});

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        saveToClipboard(request.text);
    }
);

// @see http://qiita.com/ororog/items/146b7cdac85a48690c1e
function saveToClipboard(str) {
    var textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";
    document.body.appendChild(textArea);
    textArea.value = str;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}




