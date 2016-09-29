/**
 * Created by yxzhang on 9/26/16.
 */
import { Injectable } from "@angular/core";

@Injectable()
export class LocalContactService {

    constructor() {}

    getAllContacts(callback) {
        var contacts = require("nativescript-contacts");
        contacts.getAllContacts().then(function(args) {
            callback(args.data);
        }, function(err) {});
    }
}