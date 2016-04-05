"use strict";
var CommentExpander = (function () {
    function CommentExpander() {
    }
    CommentExpander.prototype.exec = function () {
        if (!this.needToExec()) {
            return;
        }
        $("#expandAll").each(function () {
            this.click();
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
var CopyURLButtonManager = (function () {
    function CopyURLButtonManager() {
        this.imgURL = chrome.extension.getURL("images/link.png");
        this.idText = "backlog-benri-text-for-clipboard";
    }
    CopyURLButtonManager.prototype.exec = function () {
        this.createDom();
    };
    CopyURLButtonManager.prototype.needToExec = function () {
        return location.href.lastIndexOf(".backlog.jp/view/") > 0;
    };
    CopyURLButtonManager.prototype.createDom = function () {
        var parent = $("#copyKey-help").parent();
        var button = $('<input type="image" src="' + this.imgURL + '" width="20px" height="20px" />');
        button.click(function () {
            chrome.runtime.sendMessage({ text: location.href });
        });
        parent.append(button);
        return parent;
    };
    return CopyURLButtonManager;
}());
$(document).ready(function () {
    new CommentExpander().exec();
    new ObstaclePagesSkipper().exec();
    new CopyURLButtonManager().exec();
});
