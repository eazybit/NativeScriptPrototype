/**
 * Created by yxzhang on 9/26/16.
 */
import { LoginComponent } from "../pages/login/login";
import { ResearchComponent } from "../pages/research/research";
import { ContactComponent } from "../pages/contact/contact";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "research", component: ResearchComponent },
    { path: "contact", component: ContactComponent }
];

export const navigatableComponents = [
    LoginComponent,
    ResearchComponent,
    ContactComponent
];