'use strict';
chrome.runtime.onInstalled.addListener(function (details) {
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    saveToClipboard(request.text);
});
function saveToClipboard(str) {
    var textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";
    document.body.appendChild(textArea);
    textArea.value = str;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}
