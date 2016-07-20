require.config({
    "urlArgs": "v=0.0.1",
    "baseUrl": "/scripts/",
    "paths": {
        "lib": "../lib/",

        "lodash": "../lib/lodash/lodash.4.13.1.min",
        "bootstrap": "../lib/bootstrap/bootstrap.3.3.6.min",

        "knockout": "../lib/knockout/knockout.3.4.0.min",
        "jquery": "../lib/jquery/jquery.3.1.0.min",

        "durandal": "../lib/durandal",
        "plugins": "../lib/durandal/plugins",
        "transitions": "../lib/durandal/transitions",
        "text": "../lib/require/text",

        "setup": "../boilerPlate/scripts/setup"
    }
});
console.debug("require config done");
