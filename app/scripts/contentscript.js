"use strict";
var CommentExpander = (function () {
    function CommentExpander() {
    }
    CommentExpander.prototype.fireExpandAll = function () {
        var _this = this;
        $(function () {
            if (!_this.needToExec()) {
                return;
            }
            $("#expandAll").each(function () {
                this.click();
            });
        });
    };
    CommentExpander.prototype.needToExec = function () {
        return location.href.lastIndexOf("/.backlog.jp/view/") > 0;
    };
    return CommentExpander;
}());
var expander = new CommentExpander();
expander.fireExpandAll();
