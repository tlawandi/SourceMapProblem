// Write your JavaScript code.

//var library = require("./Hello");
require(["../../node_modules/library/dist/Hello"],
    function(Library) {
        // do something with fooModule
        debugger;

        var a = new Library.Hello();
        a.helloWorld();
        

        
    });
//debugger;
//console.log(library.helloWorld());
//alert('hello');