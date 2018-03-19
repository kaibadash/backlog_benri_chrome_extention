/// <reference path="../../typings/main.d.ts" />
class Settings {
    public static KEY_SAVE: string = "backlog_benri_save";
    public static KEY_TEAM_ID: string = "backlog_benri_team_name";
    public static KEY_TEMPLATE: string = "backlog_benri_template";
    settings: any = {};
    
    constructor(callback: (s: Settings) => void) {
        this.loadSettings(callback);
    }
    
    public saveSettings() {
        this.settings[Settings.KEY_TEAM_ID] = $("#" + Settings.KEY_TEAM_ID).val();
        this.settings[Settings.KEY_TEMPLATE] = $("#" + Settings.KEY_TEMPLATE).val();
        chrome.storage.sync.set(this.settings);
        window.close();
    }
    
    public getTeamUrl() : string {
        return this.getSetting(Settings.KEY_TEAM_ID);
    }

    public getTemplate() : string {
        return this.getSetting(Settings.KEY_TEMPLATE);
    }

    private getSetting(k: string) : string {
        var v = this.settings[k];
        return v == null ? "" : v;
    }
    
    private loadSettings(callback: (s: Settings) => void) {
        chrome.storage.sync.get([Settings.KEY_TEAM_ID, Settings.KEY_TEMPLATE], (v: Settings) => {
            this.settings = v;
            if (callback == null) {
                return;
            }
            callback(this);
        });
    }
}