/**
 * Created by yxzhang on 9/28/16.
 */
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Config } from "../../configs/app.config";

@Injectable()
export class NoteService {
    config: Config;

    constructor(private http: Http) {
        this.config = new Config();
    }

    // constructor() {
    //     this.config = new Config();
    // }

    getNotes() {
        console.debug("getting notes from " + this.config.server);
        let url = "http://" + this.config.server + "/restapi/2.0/thread/?expand=thread;entry;entities;entity;source;submitter;&outputformat=json&page=1&rpp=20&showpermission=true&sortby=lastediteddate&sortorder=desc";
        console.debug("url: " + url);
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Authorization", "Basic [token" + global.token + "token]");
        
        return this.http.post(
            url,
            '',
            { headers: headers }
        );

        // var http = require("http");
        // let headers = [];
        // headers.push({"Content-Type": "application/x-www-form-urlencoded"});
        // headers.push({"Authorization": "Basic [token" + global.token + "token]"});
        //
        // return http.request({
        //     url: url,
        //     method: "POST",
        //     headers: headers
        // });
    }
}