/// <reference path="../../typings/main.d.ts" />
/// <reference path="ContentScriptBase.ts" />
"use strict";

// コメント展開リンクをクリックして開いた状態にする
class CommentExpander {
    exec() {
        if (!this.needToExec()) {
            return;
        }
        $("#expandAll").each(function(){
            setTimeout(() => {
                this.click();
            }, 100);
        });
    }

    private needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    }
}
