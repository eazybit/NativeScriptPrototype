"use strict";
/**
 * Created by yxzhang on 9/28/16.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var app_config_1 = require("../../configs/app.config");
var NoteService = (function () {
    function NoteService(http) {
        this.http = http;
        this.config = new app_config_1.Config();
    }
    NoteService.prototype.getNotes = function () {
        console.debug("getting notes from " + this.config.server);
        var url = "http://" + this.config.server + "/restapi/2.0/thread/?expand=thread;entry;entities;entity;source;submitter;&outputformat=json&page=1&rpp=20&showpermission=true&sortby=lastediteddate&sortorder=desc";
        console.debug("url: " + url);
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Authorization", "Basic [token" + global.token + "token]");
        return this.http.post(url, '', { headers: headers });
    };
    NoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=noteService.js.map