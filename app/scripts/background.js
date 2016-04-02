'use strict';
chrome.runtime.onInstalled.addListener(function (details) {
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    saveToClipboard(request.text);
});
var openBacklogTicketFunc = function (info, tab) {
    var matched = info.selectionText.match(/([A-Z]+\-[0-9]+)/);
    if (matched.length < 2)
        return;
    chrome.tabs.create({ url: "https://pixta.backlog.jp/view/" + matched[1] });
};
var parentContextMenuID = chrome.contextMenus.create({
    "title": "Show backlog ticket",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": openBacklogTicketFunc
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
