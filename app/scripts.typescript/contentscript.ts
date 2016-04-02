/// <reference path="../../typings/main.d.ts" />
"use strict";

class CommentExpander {
    fireExpandAll() {
        $(() => {
            $("#expandAll").each(function(){
                this.click();
            });
        });
    }
}

var expander:CommentExpander = new CommentExpander();
expander.fireExpandAll();
