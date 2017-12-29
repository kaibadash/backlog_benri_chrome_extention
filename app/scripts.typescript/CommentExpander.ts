/// <reference path="../../typings/main.d.ts" />
/// <reference path="ContentScriptBase.ts" />
"use strict";

// コメント展開リンクをクリックして開いた状態にする
class CommentExpander {
    run() {
        if (!this.needToExec()) {
            return;
        }
        setTimeout(() => {
            $("body").css("overflow", "hidden");
            $(".comment-item.is_minimum").each(function(){
                this.click();                
            });
            $("body").css("overflow", "visible");
        }, 500);
    }

    private needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    }
}
