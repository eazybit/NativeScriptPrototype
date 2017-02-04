/**
 * Created by yxzhang on 9/23/16.
 */
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginFormComponent } from "./components/login-form/login-form";
import { NoteListComponent } from "./components/note-list/note-list";
import { ContactListComponent } from "./components/contact-list/contact-list";

import { AppComponent } from "./components/app.component";
import { routes, navigatableComponents } from "./constants/app.routing";


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent],

    entryComponents: [LoginFormComponent, NoteListComponent, ContactListComponent],
})
export class AppModule {}