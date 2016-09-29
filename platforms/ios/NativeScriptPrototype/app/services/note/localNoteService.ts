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
        file.writeText(data.toString())
            .then(function () {
                alert('Save note successfully in local file system');
                if(callback) {
                    callback();
                }
            }, function (error) {
                // Failed to write to the file.
            });
    }

    getNoteLocally(name, callback) {
        let format = "json";
        let fs = require("file-system");
        let documents = fs.knownFolders.documents();
        let path = fs.path.join(documents.path, "NativeScriptPrototype", name + "." + format);
        console.debug(path);
        let file = fs.File.fromPath(path);
        file.readText()
            .then(function (content) {
                callback(content);
            }, function (error) {
                // Failed to read from the file.
            });
    }
}