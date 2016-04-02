'use strict';
var Settings = (function () {
    function Settings() {
        this.settings = {};
    }
    Settings.prototype.saveSettings = function () {
        settings[Settings.KEY_TEAM_ID] = $("#" + Settings.KEY_TEAM_ID).val();
        chrome.storage.sync.set(settings);
        window.close();
    };
    Settings.prototype.loadSettings = function () {
        chrome.storage.sync.get(Settings.KEY_TEAM_ID, function (v) {
            $("#" + Settings.KEY_TEAM_ID).val(v[Settings.KEY_TEAM_ID]);
        });
    };
    Settings.KEY_SAVE = "backlog_benri_save";
    Settings.KEY_TEAM_ID = "backlog_benri_team_name";
    return Settings;
}());
var settings = new Settings();
$(function () {
    settings.loadSettings();
    $("#" + Settings.KEY_SAVE).click(settings.saveSettings);
});
function saveSettings() {
    settings.saveSettings();
}
