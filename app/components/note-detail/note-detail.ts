/**
 * Created by yxzhang on 9/29/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalNoteService } from "../../business/local-note.service";
import dialogs = require("ui/dialogs");

@Component({
    selector: "note-detail",
    templateUrl: "components/note-detail/note-detail.html",
    providers: [ LocalNoteService ],
    styleUrls: ["components/note-detail/note-detail.css"]
})
export class NoteDetailComponent implements OnInit, OnDestroy {
    private noteId: String;
    private sub: any;
    private title: String;
    private submitter: String;
    private entryType: String;
    private displayDate: String;
    private priority: String;

    constructor(private route: ActivatedRoute, private router: Router, private localNoteService: LocalNoteService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if(params.hasOwnProperty('id')) {
                this.noteId = params['id'];
                this.localNoteService.getNoteLocally(params['id'], (content) => this.processNote(content));
            }
        });
        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goToNotificationDemo() {
        this.router.navigate(["notification-demo", this.noteId]);
    }

    public processNote(content) {
        if(content !== null && content !== '') {
            var note = JSON.parse(content);
            this.title = note["title"].toString();
            this.submitter = note["submitter"].toString();
            this.entryType = note["entryType"].toString();
            this.displayDate = note["displayDate"].toString();
            this.submitter = note["submitter"].toString();
            this.priority = note["priority"].toString();
        } else {
            this.title = 'empty';
            this.submitter = 'empty';
            this.entryType = 'empty';
            this.displayDate = 'empty';
            this.submitter = 'empty';
            this.priority = 'empty';
        }
    }
}