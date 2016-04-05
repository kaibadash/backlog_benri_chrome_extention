"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommentExpander = (function (_super) {
    __extends(CommentExpander, _super);
    function CommentExpander() {
        _super.apply(this, arguments);
    }
    CommentExpander.prototype.run = function () {
        $("#expandAll").each(function () {
            this.click();
        });
    };
    CommentExpander.prototype.needToExec = function () {
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    };
    return CommentExpander;
}(ContentScriptBase));
