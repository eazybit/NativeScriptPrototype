"use strict";
/**
 * Created by yxzhang on 9/26/16.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var app_config_1 = require("../../configs/app.config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.config = new app_config_1.Config();
    }
    // constructor() {
    //     this.config = new Config();
    // }
    UserService.prototype.login = function (user) {
        console.debug("logging in as " + user.usr + " on server " + this.config.server);
        // let url = "https://www.google.com/";
        var url = "http://tamaledev.gencos.com/restapi/2.0/token/?outputformat=json";
        console.debug("url: " + url);
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("username", "admin");
        headers.append("Authorization", "Basic Gh+VN4+UprI=");
        try {
            return this.http.request(url, { headers: headers, method: "POST", body: 'test' });
        }
        catch (e) {
            console.log(e);
        }
        // var http = require("http");
        // var headers = [];
        // headers.push({"Content-Type": "application/json"});
        // headers.push({"username": "admin"});
        // headers.push({"Authorization": "Basic Gh+VN4+UprI="});
        //
        // return http.request({
        //     url: url,
        //     method: 'POST',
        //     headers: headers
        // });
        // var fetchModule = require("fetch");
        // var headers = [];
        // headers.push({"username": "admin"});
        // headers.push({"Authorization": "Basic Gh+VN4+UprI="});
        // return fetchModule.fetch(url, {
        //     method: "POST",
        //     headers: headers,
        //     absoluteUrl: true
        // });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=authService.js.map