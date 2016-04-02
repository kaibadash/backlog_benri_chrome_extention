"use strict";
var CommentExpander = (function () {
    function CommentExpander() {
    }
    CommentExpander.prototype.fireExpandAll = function () {
        $(function () {
            $("#expandAll").each(function () {
                this.click();
            });
        });
    };
    return CommentExpander;
}());
var expander = new CommentExpander();
expander.fireExpandAll();
