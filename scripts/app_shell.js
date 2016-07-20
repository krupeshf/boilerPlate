define(["require", "exports", "utils", "plugins/router"], function (require, exports, utils) {
    "use strict";
    var router = require("plugins/router");
    //cannot use export class AppShell
    //somehow export can only be used for the dependency calls - example is Utils
    var AppShell = (function () {
        function AppShell() {
            this.viewUrl = "app_shell.html";
            this.router = router;
        }
        AppShell.prototype.activate = function () {
            console.debug("Setting routes for SPA");
            console.log(utils.square(5));
            router.map([{
                    route: "",
                    moduleId: "home",
                    title: "PageTitle",
                }]);
            return router.activate();
        };
        ;
        return AppShell;
    }());
    return AppShell;
});
