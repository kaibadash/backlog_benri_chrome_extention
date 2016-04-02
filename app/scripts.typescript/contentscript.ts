/// <reference path="../../typings/main.d.ts" />
"use strict";

// TODO: move to CommentExpander.ts
class CommentExpander {
    exec() {
        $(() => {
            if (!this.needToExec()) {
                return;
            }
            $("#expandAll").each(function(){
                this.click();
            });
        });
    }
    
    private needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    }
}

// TODO: move to ...
class ObstaclePagesSkipper {
    exec() {
        $("#issuecompletion .inner a").each(function(){
            this.click();
        });
    }
    
    private needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/add/") > 0;
    }
}

// TODO: move to ...
class CopyURLButtonManager {
    private imgURL: string = chrome.extension.getURL("images/link.png");
    private idText: string = "backlog-benri-text-for-clipboard";
       
    exec() {
        this.createDom();
    }
    
    private needToExec() : Boolean {
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

new CommentExpander().exec();
new ObstaclePagesSkipper().exec();
new CopyURLButtonManager().exec();