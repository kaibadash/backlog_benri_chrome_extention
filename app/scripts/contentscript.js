"use strict";
var CommentExpander = (function () {
    function CommentExpander() {
    }
    CommentExpander.prototype.exec = function () {
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
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    };
    return CommentExpander;
}());
var ObstaclePagesSkipper = (function () {
    function ObstaclePagesSkipper() {
    }
    ObstaclePagesSkipper.prototype.exec = function () {
        console.log($("#issuecompletion .inner a").html());
        $("#issuecompletion .inner a").each(function () {
            this.click();
        });
    };
    ObstaclePagesSkipper.prototype.needToExec = function () {
        return location.href.lastIndexOf(".backlog.jp/add/") > 0;
    };
    return ObstaclePagesSkipper;
}());
new CommentExpander().exec();
new ObstaclePagesSkipper().exec();
