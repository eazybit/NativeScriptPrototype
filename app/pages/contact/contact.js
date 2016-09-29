"use strict";
/**
 * Created by yxzhang on 9/27/16.
 */
var core_1 = require("@angular/core");
var localContactService_1 = require("../../services/contact/localContactService");
var router_1 = require("@angular/router");
var ContactComponent = (function () {
    function ContactComponent(localContactService, router) {
        var _this = this;
        this.localContactService = localContactService;
        this.router = router;
        this.processContactData = function (args) {
            for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
                var contact = args_1[_i];
                if (contact.hasOwnProperty("name")) {
                    _this.contacts.push(contact["name"].given.toString() + " " + contact["name"].family.toString());
                }
            }
        };
        this.contacts = [];
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localContactService.getAllContacts(function (contacts) { return _this.processContactData(contacts); });
    };
    ContactComponent.prototype.goToResearch = function () {
        this.router.navigate(["/research"]);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: "research-view",
            templateUrl: "pages/contact/contact.html",
            providers: [localContactService_1.LocalContactService],
            styleUrls: ["pages/contact/contact.css"]
        }), 
        __metadata('design:paramtypes', [localContactService_1.LocalContactService, router_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.js.map