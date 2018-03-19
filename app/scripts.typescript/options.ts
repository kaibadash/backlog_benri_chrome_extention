/// <reference path="../../typings/main.d.ts" />
/// <reference path="Settings.ts" />
'use strict';

var settings: Settings = new Settings(null);

$(() => {
    $("#" + Settings.KEY_TEAM_ID).val(settings.getTeamUrl());
    $("#" + Settings.KEY_TEMPLATE).val(settings.getTemplate());
    $("#" + Settings.KEY_SAVE).click(
        (event: MouseEvent) => { settings.saveSettings(); }
    );
});
