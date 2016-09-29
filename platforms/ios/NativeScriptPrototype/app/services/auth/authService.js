"use strict";
/**
 * Created by yxzhang on 9/26/16.
 */
var core_1 = require("@angular/core");
var app_config_1 = require("../../configs/app.config");
var UserService = (function () {
    function UserService() {
        this.config = new app_config_1.Config();
    }
    UserService.prototype.login = function (user) {
        var http = require("http");
        console.debug("logging in as " + user.usr + " on server " + this.config.server);
        if (user.usr === "admin") {
            user.pwd = "Gh+VN4+UprI=";
        }
        var url = "http://" + this.config.server + "/restapi/2.0/token/?outputformat=json";
        console.debug("url: " + url);
        var headers = [];
        headers.push({ "Content-Type": "application/json" });
        headers.push({ "username": "admin" });
        headers.push({ "Authorization": "Basic Gh+VN4+UprI=" });
        return http.request({
            url: url,
            method: "POST",
            headers: headers
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=authService.js.map