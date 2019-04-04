function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}
function modificator ( func ) {
    return sampleFunc.bind(sampleFunc, "test" , "sample")
}
testFunc = modificator( sampleFunc )
testFunc()
///
function testArguments () {
    function generateError ( numArgs ) {
        var err = new Error ;
        err.name = "Application";
        err.message = "Invalid arguments"
        err.stack = "Function needs 3 arguments, but only 1 present"
        throw err;
    }
    try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    }
    catch ( err ) {
        console.error ( `${err.name}: ${err.message}\n${err.stack}` )
    }
}
testArguments ( "Google" )