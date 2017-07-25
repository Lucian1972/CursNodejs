console.log("Unit test started");
var myValidator = require("./modules/passwordValidator");
var password = "testBauBAU2017";
var valid = myValidator.validPassword("testBauBau201");
console.log("YOUR PASSWORD '" + password + "' is : " + valid);
