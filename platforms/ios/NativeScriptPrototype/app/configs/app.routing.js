"use strict";
/**
 * Created by yxzhang on 9/26/16.
 */
var login_1 = require("../pages/login/login");
var research_1 = require("../pages/research/research");
var contact_1 = require("../pages/contact/contact");
exports.routes = [
    { path: "", component: login_1.LoginComponent },
    { path: "research", component: research_1.ResearchComponent },
    { path: "contact", component: contact_1.ContactComponent }
];
exports.navigatableComponents = [
    login_1.LoginComponent,
    research_1.ResearchComponent,
    contact_1.ContactComponent
];
//# sourceMappingURL=app.routing.js.map