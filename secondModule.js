// The second module of my Node JS application

function sendModuleFunction(data){
    console.log("The send module was called to output the message: " + data)
}

// We export our function to the main module so then we can use it
module.exports.myCoolFunction = sendModuleFunction;