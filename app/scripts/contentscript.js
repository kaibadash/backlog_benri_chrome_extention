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
        $("#issuecompletion .inner a").each(function () {
            this.click();
        });
    };
    ObstaclePagesSkipper.prototype.needToExec = function () {
        return location.href.lastIndexOf(".backlog.jp/add/") > 0;
    };
    return ObstaclePagesSkipper;
}());
var ElementAdder = (function () {
    function ElementAdder() {
        this.imgURL = chrome.extension.getURL("images/link.png");
        this.idText = "backlog-benri-text-for-clipboard";
    }
    ElementAdder.prototype.exec = function () {
        this.createDom();
    };
    ElementAdder.prototype.needToExec = function () {
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    };
    ElementAdder.prototype.createDom = function () {
        var parent = $("#copyKey-help").parent();
        var text = $('<input type="text" id="' + this.idText + '" value="' + location.href + '" />');
        var button = $('<input type="image" src="' + this.imgURL + '" width="20px" height="20px" />');
        button.click(function () {
            console.log("aaaaaaaaaaaa");
            parent.append(text);
            text.select();
            document.execCommand("copy");
            setTimeout(function () { text.hide(); });
        });
        parent.append(button);
        return parent;
    };
    return ElementAdder;
}());
new CommentExpander().exec();
new ObstaclePagesSkipper().exec();
new ElementAdder().exec();
