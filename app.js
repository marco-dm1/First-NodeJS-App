// The main module of our Node.JS application.

console.log(module); // Outputs our module's information.

const mySecondModule = require("./secondModule.js") // Create a const variable because the module should never change.

mySecondModule.myCoolFunction("hello");

const myThirdModule = require("./thirdModule.js")

myThirdModule();