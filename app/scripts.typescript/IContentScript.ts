/// <reference path="../../typings/main.d.ts" />
"use strict";

interface IContentScript {
    run() : void;
    exec() : void;    
    needToExec() : Boolean;
}