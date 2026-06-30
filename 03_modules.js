/**
 * Modules
 * CommonJS, every file is module (by default)
 * Modules - Encapsulated Code (only share minimun)
 */

// Common JS Import
// const names = require("./04_names");

// ES6 Import
import names from "./04_names.js";
import sayHi from "./05_utils.js";
import person from "./06_alternative_flavour.js"; 
// import('./07_mind_grenade.js') will load all

console.log(person.name = "Rahul");

sayHi(names.Yogesh);
sayHi("John");
sayHi(names.Rashid);