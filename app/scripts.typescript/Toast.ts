/// <reference path="../../typings/main.d.ts" />
class Toast {
    static show(text: string) {
        console.log("show", text);
        var t: JQuery = $(`<p style='background-color: #000000aa; color: #fff; z-index: 5963; text-align: center; position: absolute; top: 0px; left: 0px; width: 100%; height: 30px; line-height: 30px;'>${text}</p>`);
        t.hide();
        $("body").append(t);
        t.fadeIn("fast");
        setTimeout(() => {
            t.fadeOut("fast").remove();
        }, 1000);
    }
}