/// <reference path="../../typings/main.d.ts" />
"use strict";

class CommentExpander {
    fireExpandAll() {
        $(() => {
            if (!this.needToExec()) {
                return;
            }
            $("#expandAll").each(function(){
                this.click();
            });
        });
    }
    
    // lazy
    private needToExec() : Boolean {
        return location.href.lastIndexOf("/.backlog.jp/view/") > 0;
    }
}

var expander:CommentExpander = new CommentExpander();
expander.fireExpandAll();
