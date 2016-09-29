"use strict";
/**
 * Created by yxzhang on 9/27/16.
 */
var core_1 = require("@angular/core");
var LocalNoteService = (function () {
    function LocalNoteService() {
    }
    LocalNoteService.prototype.saveNoteLocally = function (name, data, callback) {
        var format = "json";
        var fs = require("file-system");
        var documents = fs.knownFolders.documents();
        var path = fs.path.join(documents.path, "NativeScriptPrototype", name + "." + format);
        console.debug(path);
        var file = fs.File.fromPath(path);
        file.writeText(data.toString())
            .then(function () {
            alert('Save note successfully in local file system');
            if (callback) {
                callback();
            }
        }, function (error) {
            // Failed to write to the file.
        });
    };
    LocalNoteService.prototype.getNoteLocally = function (name, callback) {
        var format = "json";
        var fs = require("file-system");
        var documents = fs.knownFolders.documents();
        var path = fs.path.join(documents.path, "NativeScriptPrototype", name + "." + format);
        console.debug(path);
        var file = fs.File.fromPath(path);
        file.readText()
            .then(function (content) {
            callback(content);
        }, function (error) {
            // Failed to read from the file.
        });
    };
    LocalNoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalNoteService);
    return LocalNoteService;
}());
exports.LocalNoteService = LocalNoteService;
//# sourceMappingURL=localNoteService.js.map