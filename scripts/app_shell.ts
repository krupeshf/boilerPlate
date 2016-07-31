/// <reference path="../lib/lodash/lodash.d.ts"/>

declare var require: any;

import u = require("lodash");

import "plugins/router"
let router = require("plugins/router");

import utils = require("utils");

//cannot use export class AppShell
//somehow export can only be used for the dependency calls - example is Utils
class AppShell {
    public viewUrl = "app_shell.html";
    public router = router;
    public activate() {
        console.debug("Setting routes for SPA");
        console.log(utils.square(5));
        router.map([{
            route: "",
            moduleId: "home",
            title: "PageTitle",
        }]);
        return router.activate();
    };
}

export = AppShell;