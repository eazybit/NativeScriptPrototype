"use strict";
/**
 * Created by yxzhang on 9/26/16.
 */
var core_1 = require("@angular/core");
var LocalContactService = (function () {
    function LocalContactService() {
    }
    LocalContactService.prototype.getAllContacts = function (callback) {
        var contacts = require("nativescript-contacts");
        contacts.getAllContacts().then(function (args) {
            callback(args.data);
        }, function (err) { });
    };
    LocalContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalContactService);
    return LocalContactService;
}());
exports.LocalContactService = LocalContactService;
//# sourceMappingURL=localContactService.js.map