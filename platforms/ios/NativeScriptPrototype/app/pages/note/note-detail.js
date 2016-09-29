"use strict";
/**
 * Created by yxzhang on 9/29/16.
 */
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var localNoteService_1 = require("../../services/note/localNoteService");
var NoteDetailComponent = (function () {
    function NoteDetailComponent(localNoteService, route) {
        this.localNoteService = localNoteService;
        this.route = route;
        // this.noteId = route.snapshot.params['id'];
    }
    NoteDetailComponent.prototype.ngOnInit = function () {
        // this.localNoteService.getNoteLocally(this.noteId, (content) => this.processNote(content));
    };
    NoteDetailComponent.prototype.processNote = function (content) {
        // alert(content);
    };
    NoteDetailComponent = __decorate([
        core_1.Component({
            selector: "note-detail-view",
            templateUrl: "pages/note/note-detail.html",
            providers: [localNoteService_1.LocalNoteService],
            styleUrls: ["pages/note/note-detail.css"]
        }), 
        __metadata('design:paramtypes', [localNoteService_1.LocalNoteService, router_1.ActivatedRoute])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());
exports.NoteDetailComponent = NoteDetailComponent;
//# sourceMappingURL=note-detail.js.map