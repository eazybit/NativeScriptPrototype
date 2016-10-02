/**
 * Created by yxzhang on 9/26/16.
 */
import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/model/user";
import { UserService } from "../../services/auth/authService";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
    selector: "login-view",
    providers: [ UserService ],
    templateUrl: "./pages/login/login.html"
})
export class LoginComponent implements OnInit {
    user: User;

    constructor(private userService: UserService, private router: Router, private page: Page) {
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
                    global.token = response["_body"].userinfo.token;
                    console.debug(global.token);
                    this.router.navigate(["/research"]);
                },
                (e) => {
                    alert("Login failure: " + e);
                }
            );
    }
}