/// <reference path="../../typings/main.d.ts" />
/// <reference path="ContentScriptBase.ts" />
"use strict";

// URLをコピーするボタンを追加する
class CopyURLButtonManager {
    private imgURL: string = chrome.extension.getURL("images/link.png");
    private idText: string = "backlog-benri-text-for-clipboard";
       
    run() {
        this.createDom();
    }
    
    needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    }
    
    private createDom() : JQuery {
        var parent: JQuery = $("#copyKey-help").parent();  
        var button: JQuery = $('<input type="image" src="' + this.imgURL + '" width="20px" height="20px" />');
        button.click(() => {
            chrome.runtime.sendMessage({text: location.href});
        });
        parent.append(button);
        return parent;
    }
}