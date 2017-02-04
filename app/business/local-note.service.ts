/**
 * Created by yxzhang on 9/27/16.
 */
import { Injectable } from "@angular/core";

@Injectable()
export class LocalNoteService {

    constructor() {}

    saveNoteLocally(name, data, callback?) {
        let format = "json";
        let fs = require("file-system");
        let documents = fs.knownFolders.documents();
        let path = fs.path.join(documents.path, "NativeScriptPrototype", name + "." + format);
        console.debug(path);
        let file = fs.File.fromPath(path);
        file.writeTextSync(data.toString(), function (error) {
            alert(error);
        });
        if(callback) {
            callback();
        }
    }

    getNoteLocally(name, callback) {
        let format = "json";
        let fs = require("file-system");
        let documents = fs.knownFolders.documents();
        let path = fs.path.join(documents.path, "NativeScriptPrototype", name + "." + format);
        var content = '';
        console.debug(path);
        if(fs.File.exists(path)) {
            let file = fs.File.fromPath(path);
            content = file.readTextSync(function (error) {
                alert(error);
            });
        }
        if(callback) {
            callback(content);
        }
    }
}