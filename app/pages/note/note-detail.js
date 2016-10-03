"use strict";
/**
 * Created by yxzhang on 9/29/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var localNoteService_1 = require("../../services/note/localNoteService");
var NoteDetailComponent = (function () {
    function NoteDetailComponent(route, localNoteService) {
        this.route = route;
        this.localNoteService = localNoteService;
    }
    NoteDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.noteId = params['id'];
            _this.localNoteService.getNoteLocally(_this.noteId, function (content) { return _this.processNote(content); });
        });
    };
    NoteDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NoteDetailComponent.prototype.processNote = function (content) {
        var note = JSON.parse(content);
        this.title = note["title"].toString();
        this.submitter = note["submitter"].toString();
        this.entryType = note["entryType"].toString();
        this.displayDate = note["displayDate"].toString();
        this.submitter = note["submitter"].toString();
        this.priority = note["priority"].toString();
    };
    NoteDetailComponent = __decorate([
        core_1.Component({
            selector: "note-detail-view",
            templateUrl: "pages/note/note-detail.html",
            providers: [localNoteService_1.LocalNoteService],
            styleUrls: ["pages/note/note-detail.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, localNoteService_1.LocalNoteService])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());
exports.NoteDetailComponent = NoteDetailComponent;
//# sourceMappingURL=note-detail.js.map