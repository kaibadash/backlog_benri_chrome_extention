/// <reference path="../../typings/main.d.ts" />
/// <reference path="ContentScriptBase.ts" />
"use strict";

// コメント展開リンクをクリックして開いた状態にする
class CommentExpander extends ContentScriptBase {
    run() {
        $("#expandAll").each(function(){
            this.click();
        });
    }
    
    needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    }
}
