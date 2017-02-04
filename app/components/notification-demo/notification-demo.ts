/**
 * Created by yxzhang on 10/3/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as LocalNotifications from "nativescript-local-notifications"
var dialogs = require("ui/dialogs");

@Component({
    selector: "note-detail-view",
    templateUrl: "./components/notification-demo/notification-demo.html"
})
export class NotificationDemoComponent implements OnInit, OnDestroy {
    private noteId: String;
    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.noteId = params['id'];
        });
        LocalNotifications.hasPermission().then(
            function(granted) {
                console.log("Permission granted? " + granted);
            }
        );
        LocalNotifications.addOnMessageReceivedCallback((notificationData) => this.reRoute(notificationData));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    reRoute(notificationData) {
        console.log(notificationData.id);
        this.router.navigate(["note-detail", notificationData.id]);
    }

    schedule() {
        let options:Array<Object> = [];
        options.push({
            id: this.noteId,
            title: 'test title',
            body: 'test body',
            ticker: 'test ticker',
            at: new Date(new Date().getTime() + (10 * 1000))
        });
        LocalNotifications.schedule(options).then(() => {
            console.log("Notification scheduled");
        }, (error) => {
            console.log("ERROR", error);
        });
    };
}