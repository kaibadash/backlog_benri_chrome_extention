/// <reference path="../../typings/main.d.ts" />
class Settings {
    public static KEY_SAVE: string = "backlog_benri_save";
    public static KEY_TEAM_ID: string = "backlog_benri_team_name";
    settings: any = {};
    
    constructor(callback: (s: Settings) => void) {
        this.loadSettings(callback);
    }
    
    saveSettings() {
        this.settings[Settings.KEY_TEAM_ID] = $("#" + Settings.KEY_TEAM_ID).val();
        chrome.storage.sync.set(this.settings);
        window.close();
    }
    
    public getTeamUrl() : string {
        var v = this.settings[Settings.KEY_TEAM_ID];
        console.log("getTeamUrl " + v);
        return v == null ? "" : v;
    }
    
    private loadSettings(callback: (s:Settings) => void) {
        chrome.storage.sync.get(Settings.KEY_TEAM_ID, (v: Settings) => {
           console.log("loadSettings " + v[Settings.KEY_TEAM_ID]);
           this.settings = v;
           callback(this);
        });       
    }
}