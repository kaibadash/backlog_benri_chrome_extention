/// <reference path="../../typings/main.d.ts" />
/// <reference path="CommentExpander.ts" />
/// <reference path="ObstaclePagesSkipper.ts" />
/// <reference path="CopyURLButtonManager.ts" />
"use strict";

$(document).ready(() => {
    new CommentExpander().run();
    new ObstaclePagesSkipper().run();
    new CopyURLButtonManager().run();
});