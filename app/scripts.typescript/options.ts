/// <reference path="../../typings/main.d.ts" />
/// <reference path="Settings.ts" />
'use strict';

var settings: Settings = new Settings();

$(() => {
    $("#" + Settings.KEY_TEAM_ID).val(settings.getTeamUrl());
    $("#" + Settings.KEY_SAVE).click(settings.saveSettings);
});
