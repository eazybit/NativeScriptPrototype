"use strict";
/**
 * Created by yxzhang on 9/26/16.
 */
var core_1 = require("@angular/core");
var user_1 = require("../../shared/model/user");
var authService_1 = require("../../services/auth/authService");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var LoginComponent = (function () {
    function LoginComponent(userService, router, page) {
        this.userService = userService;
        this.router = router;
        this.page = page;
        this.user = new user_1.User();
        this.user.usr = "admin";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.userService.login(this.user)
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            global.token = response["_body"].userinfo.token;
            console.debug(global.token);
            _this.router.navigate(["/research"]);
        }, function (e) {
            alert("Login failure: " + e);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login-view",
            providers: [authService_1.UserService],
            templateUrl: "./pages/login/login.html"
        }), 
        __metadata('design:paramtypes', [authService_1.UserService, router_1.Router, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map