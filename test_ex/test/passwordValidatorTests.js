var chai = require("chai");
var passwordValidator = require("../modules/passwordValidator");

//module level

describe("passwordValidator", function() {
    //function level
   describe(".validPassword(password)", function() {
       // function test1
       it("should have minimum 8 characters length", function(){
           //implement test with know wrong value
           var wrongPass = "1234567";
           var valid = passwordValidator.validPassword(wrongPass);
           //chai check
           chai.expect(valid).to.be.equal(false);

           //test with good value
           var goodPassword = "12345678";
           var valid2 = passwordValidator.validPassword(goodPassword);
           chai.expect(valid2).to.be.equal(true);
       });
   });
});