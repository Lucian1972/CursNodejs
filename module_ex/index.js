console.log("module exemple started");

var myModule = require("modules/mymodules.js");
myModule.start();

console.log("Config.conf1 = " + myModule.config.conf1);
