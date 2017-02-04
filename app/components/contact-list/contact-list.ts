/**
 * Created by yxzhang on 9/27/16.
 */
import { Component, OnInit } from "@angular/core";
import { LocalContactService } from "../../business/local-contact.service";
import { Router } from "@angular/router";

@Component({
    selector: "contact-list",
    templateUrl: "components/contact-list/contact-list.html",
    providers: [ LocalContactService ],
    styleUrls: ["components/contact-list/contact-list.css"]
})
export class ContactListComponent implements OnInit {
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