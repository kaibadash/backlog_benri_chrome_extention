/// <reference path="../../typings/main.d.ts" />
/// <reference path="ContentScriptBase.ts" />
/// <reference path="Settings.ts" />
"use strict";

class TemplateLoader extends ContentScriptBase {
    run() {
        let textarea = $("#descriptionTextArea")
        let text: string = textarea.val();
        if (text.length > 0) { 
            return; 
        }
        new Settings((s: Settings) => {
            textarea.val(s.getTemplate()); 
        });
    }
    
    needToExec() : Boolean {
        return location.href.lastIndexOf(".backlog.jp/add/") > 0;
    }
}