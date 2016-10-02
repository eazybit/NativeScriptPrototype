/**
 * Created by yxzhang on 9/23/16.
 */
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
// import { LoginComponent } from "./pages/login/login";
// import { ResearchComponent } from "./pages/research/research";
// import { ContactComponent } from "./pages/contact/contact";


import { AppComponent } from "./components/app.component";
import { routes, navigatableComponents } from "./configs/app.routing";


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
    // entryComponents: [LoginComponent, ResearchComponent, ContactComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}