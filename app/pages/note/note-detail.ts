/**
 * Created by yxzhang on 9/29/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalNoteService } from "../../services/note/localNoteService";
import dialogs = require("ui/dialogs");

@Component({
    selector: "note-detail-view",
    templateUrl: "pages/note/note-detail.html",
    providers: [ LocalNoteService ],
    styleUrls: ["pages/note/note-detail.css"]
})
export class NoteDetailComponent implements OnInit, OnDestroy {
    private noteId: String;
    private sub: any;
    private title: String;
    private submitter: String;
    private entryType: String;
    private displayDate: String;
    private priority: String;

    constructor(private route: ActivatedRoute, private localNoteService: LocalNoteService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.noteId = params['id'];
            this.localNoteService.getNoteLocally(this.noteId, (content) => this.processNote(content));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public processNote(content) {
        var note = JSON.parse(content);
        this.title = note["title"].toString();
        this.submitter = note["submitter"].toString();
        this.entryType = note["entryType"].toString();
        this.displayDate = note["displayDate"].toString();
        this.submitter = note["submitter"].toString();
        this.priority = note["priority"].toString();
    }
}