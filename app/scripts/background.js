'use strict';
chrome.runtime.onInstalled.addListener(function (details) {
});
var KEY_TEAM_ID = "backlog_benri_team_name";
var teamUrl = "";
chrome.storage.sync.get(KEY_TEAM_ID, function (v) {
    teamUrl = v[KEY_TEAM_ID] || "";
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    saveToClipboard(request.text);
});
var openBacklogTicketFunc = function (info, tab) {
    var matched = info.selectionText.match(/([A-Z]+\-[0-9]+)/);
    if (matched.length < 2)
        return;
    if (teamUrl.length == 0) {
        alert("Please set backlog team ID");
        chrome.tabs.create({ url: chrome.extension.getURL("options.html") });
        return;
    }
    chrome.tabs.create({ url: "https://" + teamUrl + ".backlog.jp/view/" + matched[1] });
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
