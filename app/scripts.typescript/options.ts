/// <reference path="../../typings/main.d.ts" />
'use strict';

class Settings {
    public static KEY_SAVE: string = "backlog_benri_save";
    public static KEY_TEAM_ID: string = "backlog_benri_team_name";
    settings: any = {};
    
    constructor() {
        this.loadSettings();
    }
    
    saveSettings() {
        settings[Settings.KEY_TEAM_ID] = $("#" + Settings.KEY_TEAM_ID).val();
        chrome.storage.sync.set(settings);
        window.close();
    }
    
    private loadSettings() {
        chrome.storage.sync.get(Settings.KEY_TEAM_ID, (v: Settings) => {
           $("#" + Settings.KEY_TEAM_ID).val(v[Settings.KEY_TEAM_ID]); 
        });
    }
}

var settings: Settings = new Settings();

$(() => {
    $("#" + Settings.KEY_SAVE).click(settings.saveSettings);
});
