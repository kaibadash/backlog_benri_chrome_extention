/// <reference path="../../typings/main.d.ts" />
/// <reference path="ContentScriptBase.ts" />
/// <reference path="Toast.ts" />
"use strict";

// Add a button for copy URL
class CopyURLButtonManager {
    private imgURL: string = chrome.extension.getURL("images/link.png");
    private idText: string = "backlog-benri-text-for-clipboard";

    run() {
        setTimeout(() => { this.createDom(); }, 500);
    }

    needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    }

    private createDom() : JQuery {
        console.log("createDom aaaaa");
        var parent: JQuery = $("#copyKey-help");
        var button: JQuery = $('<input type="image" src="' + this.imgURL + '" width="20px" height="20px" />');
        button.click(() => {
            var url: String = location.href.split("#")[0];
            chrome.runtime.sendMessage({text: url});
            Toast.show("Copied!")
        });
        console.log("createDom");
        parent.append(button);
        return parent;
    }
}
