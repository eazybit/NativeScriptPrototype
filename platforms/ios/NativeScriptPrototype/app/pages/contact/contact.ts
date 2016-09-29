/**
 * Created by yxzhang on 9/27/16.
 */
import { Component, OnInit } from "@angular/core";
import { LocalContactService } from "../../services/contact/localContactService";
import { Router } from "@angular/router";

@Component({
    selector: "research-view",
    templateUrl: "pages/contact/contact.html",
    providers: [ LocalContactService ],
    styleUrls: ["pages/contact/contact.css"]
})
export class ContactComponent implements OnInit {
    private contacts: Array<String>;

    constructor(private localContactService: LocalContactService, private router: Router) {
        this.contacts = [];
    }

    ngOnInit() {
        this.localContactService.getAllContacts((contacts) => this.processContactData(contacts));
    }

    goToResearch() {
        this.router.navigate(["/research"]);
    }

    public processContactData = (args: Array<Object>) => {
        for(let contact of args) {
            if(contact.hasOwnProperty("name")) {
                this.contacts.push(contact["name"].given.toString() + " " + contact["name"].family.toString());
            }
        }
    }
}