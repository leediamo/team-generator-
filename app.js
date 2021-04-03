
//npm packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

//reader and writer lol
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile); 

//Pulling other JS files (classes)
const Engineer = require("./team-js/engineer");
const Employee = require("./team-js/employee");
const Intern = require("./team-js/intern");
const Manager = require("./team-js/manager");

