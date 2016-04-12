/// <reference path="../../typings/main.d.ts" />
/// <reference path="IContentScript.ts" />
"use strict";

abstract class ContentScriptBase implements IContentScript {
    run() : void {
        if (!this.needToExec()) {
            return;
        }
        this.exec();
    }
    
    exec() : void {
        // abstract
        console.error("no implements");
    }
        
    needToExec() : Boolean {
        // abstract
        console.error("no implements");
        return false;    
    }
}