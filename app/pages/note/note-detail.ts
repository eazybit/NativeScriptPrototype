/**
 * Created by yxzhang on 9/29/16.
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { LocalNoteService } from "../../services/note/localNoteService";
import dialogs = require("ui/dialogs");

@Component({
    selector: "note-detail-view",
    templateUrl: "pages/note/note-detail.html",
    providers: [ LocalNoteService ],
    styleUrls: ["pages/note/note-detail.css"]
})
export class NoteDetailComponent implements OnInit {
    private noteId: String;

    constructor(private localNoteService: LocalNoteService, private route: ActivatedRoute) {
        // this.noteId = route.snapshot.params['id'];
    }

    ngOnInit() {
        // this.localNoteService.getNoteLocally(this.noteId, (content) => this.processNote(content));
    }

    public processNote(content) {
        // alert(content);
    }
}