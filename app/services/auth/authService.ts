/**
 * Created by yxzhang on 9/26/16.
 */
import { Injectable } from "@angular/core";

import { User } from "../../shared/model/user";
import { Config } from "../../configs/app.config";

@Injectable()
export class UserService {
    config: Config;

    constructor() {
        this.config = new Config();
    }

    login(user: User) {
        var http = require("http");
        console.debug("logging in as " + user.usr + " on server " + this.config.server);
        if(user.usr === "admin") {
            user.pwd = "Gh+VN4+UprI=";
        }
        let url = "http://" + this.config.server + "/restapi/2.0/token/?outputformat=json";
        console.debug("url: " + url);
        let headers = [];
        headers.push({"Content-Type": "application/json"});
        headers.push({"username": "admin"});
        headers.push({"Authorization": "Basic Gh+VN4+UprI="});

        return http.request({
            url: url,
            method: "POST",
            headers: headers
        });
    }
}