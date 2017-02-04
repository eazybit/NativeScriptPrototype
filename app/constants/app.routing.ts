/**
 * Created by yxzhang on 9/26/16.
 */
import { LoginFormComponent } from "../components/login-form/login-form";
import { NoteListComponent } from "../components/note-list/note-list";
import { ContactListComponent } from "../components/contact-list/contact-list";
import { NoteDetailComponent } from "../components/note-detail/note-detail";
import { NotificationDemoComponent } from "../components/notification-demo/notification-demo";

export const routes = [
    { path: "", component: LoginFormComponent },
    { path: "research", component: NoteListComponent },
    { path: "contact", component: ContactListComponent },
    { path: "note-detail/:id", component: NoteDetailComponent },
    { path: "notification-demo/:id", component: NotificationDemoComponent }
];

export const navigatableComponents = [
    LoginFormComponent,
    NoteListComponent,
    ContactListComponent,
    NoteDetailComponent,
    NotificationDemoComponent
];