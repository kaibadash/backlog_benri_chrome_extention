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

class ObstaclePagesSkipper {
    exec() {
        console.log($("#issuecompletion .inner a").html());
        $("#issuecompletion .inner a").each(function(){
            this.click();
        });
    }
    
    private needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/add/") > 0;
    }
}

new CommentExpander().exec();
new ObstaclePagesSkipper().exec();
