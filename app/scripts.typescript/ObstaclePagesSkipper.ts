/// <reference path="../../typings/main.d.ts" />
/// <reference path="ContentScriptBase.ts" />
"use strict";

// 「追加しました」をスキップする
class ObstaclePagesSkipper extends ContentScriptBase {
    run() {
        $("#issuecompletion .inner a").each(function(){
            this.click();
        });
    }
    
    needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/add/") > 0;
    }
}
