exports.validPassword = module.exports.validPassword = function(password){
   // test1 implementation
   if(password.length < 8){
       return true;
   }
    // test 2 implementation
    
    if(password.indexOf("password") >= 0) {
        return false;
    }

    return true;
};