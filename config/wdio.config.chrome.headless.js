const {config} = require("./wdio.conf");
require("path");
const chromeHeadlessConfig = {
    ...config,
    services: ['chromedriver'], 
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
        'cjson:metadata': {
            device: 'PC',
            platform: {
                name: 'Windows 11',
                version: '10.0.22000'
            }
        },
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', '--allow-insecure-localhost']
        },
    }],
    path: "/wd/hub",
};

exports.config = chromeHeadlessConfig;