process.on('exit', function(code){
    // this code will not be executed
    setTimeout(function(){
        console.log("this will not run");

    }, 0);
    console.log("about code", code);

});
console.log("end");