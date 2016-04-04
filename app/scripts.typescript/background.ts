/// <reference path="../../typings/main.d.ts" />
'use strict';

chrome.runtime.onInstalled.addListener(details => {
    // TODO:設定がなければ設定させる
});

// TODO: キー、設定、クラスの共通化
var KEY_TEAM_ID: string = "backlog_benri_team_name";
var teamUrl: string = "";
chrome.storage.sync.get(KEY_TEAM_ID, (v) => {
    teamUrl = v[KEY_TEAM_ID] || "";
});

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        saveToClipboard(request.text);
    }
);

// TODO:果たしてこの型はわかりやすいのか？
var openBacklogTicketFunc:(info, tab) => void = (info, tab) => {
    var matched: string[] = info.selectionText.match(/([A-Z]+\-[0-9]+)/);
    if (matched.length < 2) return; // 全体と後方参照で2
    if (teamUrl.length == 0) {
        alert("Please set backlog team ID");
        chrome.tabs.create({url: chrome.extension.getURL("options.html")});
        return;
    }
    chrome.tabs.create({url: "https://"+ teamUrl + ".backlog.jp/view/" + matched[1]});
};

var parentContextMenuID = chrome.contextMenus.create({
    "title" : "Show backlog ticket",
    "type" : "normal",
    "contexts" : ["selection"],
    "onclick" : openBacklogTicketFunc
});

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




