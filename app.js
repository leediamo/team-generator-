
//npm packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

//reader and writer lol
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//Pulling other JS files (classes)
const Engineer = require("./team-js/Engineer");
const Intern = require("./team-js/Intern");
const Manager = require("./team-js/Manager");

// Questionaire
    inquirer
        .prompt([
            {
                message: "What's your name?",
                name: "name"
            },
            {
                type: "list",
                message: "Select a role.",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager"
                ],
                name: "role"
            },
            {
                message: "Enter team member's id",
                name: "id"
            },
            {
                message: "Enter team member's email address",
                name: "email"
            }])


    
