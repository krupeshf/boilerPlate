define(function (require) {
    var ko = require("knockout");
    var system = require("durandal/system");
    var app = require("durandal/app");

    //when routes are activated, navigation completed, etc. system will debug few outputs
    system.debug(false);

    app.title = "PageTitle";

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    app.start().then(function () {
        // Show the app by setting the root view model for our
        // application without a transition.
        app.setRoot("app_shell");
    });
});


