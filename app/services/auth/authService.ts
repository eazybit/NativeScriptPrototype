/**
 * Created by yxzhang on 9/26/16.
 */
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "../../shared/model/user";
import { Config } from "../../configs/app.config";

@Injectable()
export class UserService {
    private config: Config;

    constructor(private http: Http) {
        this.config = new Config();
    }

    // constructor() {
    //     this.config = new Config();
    // }

    login(user: User) {
        console.debug("logging in as " + user.usr + " on server " + this.config.server);
        // let url = "https://www.google.com/";
        let url = "http://tamaledev.gencos.com/restapi/2.0/token/?outputformat=json";
        console.debug("url: " + url);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("username", "admin");
        headers.append("Authorization", "Basic Gh+VN4+UprI=");

        try {
            return this.http.request(
                url,
                { headers: headers, method: "POST", body: 'test' }
            );
        } catch(e) {
            console.log(e);
        }


        // var http = require("http");
        // var headers = [];
        // headers.push({"Content-Type": "application/json"});
        // headers.push({"username": "admin"});
        // headers.push({"Authorization": "Basic Gh+VN4+UprI="});
        //
        // return http.request({
        //     url: url,
        //     method: 'POST',
        //     headers: headers
        // });

        // var fetchModule = require("fetch");
        // var headers = [];
        // headers.push({"username": "admin"});
        // headers.push({"Authorization": "Basic Gh+VN4+UprI="});
        // return fetchModule.fetch(url, {
        //     method: "POST",
        //     headers: headers,
        //     absoluteUrl: true
        // });
    }
}