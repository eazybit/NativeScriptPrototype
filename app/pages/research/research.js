"use strict";
/**
 * Created by yxzhang on 9/26/16.
 */
var core_1 = require("@angular/core");
var noteService_1 = require("../../services/note/noteService");
var localNoteService_1 = require("../../services/note/localNoteService");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var ResearchComponent = (function () {
    function ResearchComponent(noteService, localNoteService, router) {
        this.noteService = noteService;
        this.localNoteService = localNoteService;
        this.router = router;
        this.notes = [];
    }
    ResearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getNotes()
            .subscribe(function (response) { return _this.processNote(response); }, function (e) {
            alert("Get notes failure: " + e);
        });
    };
    ResearchComponent.prototype.onItemTap = function (event) {
        var _this = this;
        var options = {
            title: this.notes[event.index]["title"].toString(),
            // message: this.notes[event.index]["id"].toString(),
            cancelButtonText: "Cancel",
            actions: ["Download", "Detail", "Edit", "Delete", "Add Sidenote"]
        };
        dialogs.action(options).then(function (result) { return _this.noteAction(result, event.index); });
    };
    ResearchComponent.prototype.processNote = function (response) {
        var noteList = response.json()["thread-list"];
        for (var _i = 0, noteList_1 = noteList; _i < noteList_1.length; _i++) {
            var note = noteList_1[_i];
            var tmpNote = {};
            var noteData = note.notes[0]["data"];
            tmpNote["id"] = noteData["id"];
            tmpNote["title"] = noteData["title"];
            tmpNote["entryType"] = noteData["entry-type"].link.phid;
            tmpNote["priority"] = noteData["priority"];
            tmpNote["sentiment"] = noteData["sentiment"];
            tmpNote["submitter"] = noteData["submitter"].link.phid;
            tmpNote["displayDate"] = new Date(noteData["display-date"]);
            this.notes.push(tmpNote);
        }
    };
    ResearchComponent.prototype.noteAction = function (result, index) {
        if (result === 'Download') {
            var note = this.notes[index];
            var noteId = note["id"];
            var noteStr = JSON.stringify(note);
            this.localNoteService.saveNoteLocally(noteId, noteStr);
        }
        if (result === "Detail") {
        }
        else if (result !== "Cancel") {
            alert(result);
        }
    };
    ResearchComponent = __decorate([
        core_1.Component({
            selector: "research-view",
            templateUrl: "pages/research/research.html",
            providers: [noteService_1.NoteService, localNoteService_1.LocalNoteService],
            styleUrls: ["pages/research/research.css"]
        }), 
        __metadata('design:paramtypes', [noteService_1.NoteService, localNoteService_1.LocalNoteService, router_1.Router])
    ], ResearchComponent);
    return ResearchComponent;
}());
exports.ResearchComponent = ResearchComponent;
//# sourceMappingURL=research.js.map