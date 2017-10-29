"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var herolist_component_1 = require("../Components/herolist.component");
var about_component_1 = require("../Components/about.component");
var appRoutes = [
    {
        path: 'herolist',
        component: herolist_component_1.HeroListComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map