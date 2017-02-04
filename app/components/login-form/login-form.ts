/**
 * Created by yxzhang on 9/26/16.
 */
import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { AuthService } from "../../business/auth.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
    selector: "login-form",
    providers: [ AuthService ],
    templateUrl: "./components/login-form/login-form.html"
})
export class LoginFormComponent implements OnInit {
    user: User;

    constructor(private userService: AuthService, private router: Router, private page: Page) {
        this.user = new User();
        this.user.usr = "admin";
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    submit() {
        this.userService.login(this.user)
            .map(response => response.json())
            .subscribe(
                (response) => {
                    console.log("log in successful");
                    if(response.hasOwnProperty("_body")) {
                        global.token = response["_body"].userinfo.token;
                    }
                    else if(response.hasOwnProperty("userinfo")){
                        global.token = response["userinfo"].token;
                    }
                    console.debug(global.token);
                    this.router.navigate(["/research"]);
                },
                (e) => {
                    alert("Login failure: " + e);
                }
            );
    }
}