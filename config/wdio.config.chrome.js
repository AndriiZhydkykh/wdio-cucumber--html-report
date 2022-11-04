const {config} = require("./wdio.conf");
require("path");
const chromeConfig = {
    ...config,
    services: ['chromedriver'], 
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: [ '--start-maximized']
        },
    }],
    path: "/wd/hub",
};

exports.config = chromeConfig;