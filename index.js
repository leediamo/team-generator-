//npm packages
const fs = require("fs");
const inquirer = require("inquirer");

const htmlGenerator = './utils/team.html'

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

let team = [];


inquirer.prompt([
    {
        name: "managerName",
        type: "input",
        message: "Enter name",
    },
    {
        name: "managerId",
        type: "input",
        message: "Enter ID number",
    },
    {
        name: "managerEmail",
        type: "input",
        message: "Enter email",
    },
    {
        name: "select",
        type: "list",
        message: "Select a role",
        choices: ["Engineer"]
    },

])

    .then(answers => {
        let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail);
        team.push(manager);
        results(answers.select);
        console.log('✔️  Successfully wrote to html')
    })
    .catch(error => {
        console.log(error);
    });


function engineer() {
    inquirer
        .prompt([
            {
                name: "engineerName",
                type: "input",
                message: "Enter name",
            },
            {
                name: "engineerId",
                type: "input",
                message: "Enter ID number",
            },
            {
                name: "engineerEmail",
                type: "input",
                message: "Enter email",
            },
            {
                name: "select",
                type: "list",
                message: "Select a role",
                choices: ["Engineer", "Exit"]
            },
        ])
        .then(answers => {
            let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail);
            team.push(engineer);
            results(answers.select);
            console.log('✔️  Successfully wrote to html');
        })
        .catch(error => {
            console.log(error);
        });

}
function results(result) {
    if (result === "Engineer") {
        engineer();
    } else {
         
        generateHTML();
    }
}

function generateTeam(teamMember) {
    return `        
    <div class="card mx-auto" style="width: 18rem">
        <h5 class="card-header">${teamMember.getName()}<br /><br />${teamMember.getRole()}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${teamMember.getId()}</li>
            <li class="list-group-item">Email:${teamMember.getEmail()}</li>
        </ul>
    </div>
    
    `;
}

function generateInitialHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <!--CSS Stuff-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    </head>
         <body>
            <div class="jumbotron text-center">
                <h1>My Team</h1>
        </div>

        </body>
        </html>
        
        `
}

function generateHTML() {
    fs.writeFileSync(htmlGenerator, "");
    let htmlData = generateInitialHTML();
    for (var a in team) {
        htmlData += generateTeam(team[a]);
    }
    fs.writeFileSync(htmlGenerator, htmlData);
}





// It took a log time to get this going. I used old code and
//watch tutorials to help :'( . But aye it works!!!!!!!!!!




    // const writeFileAsync = util.promisify(fs.writeFile);

    // async function init() {
    //     try {

    //         const answers = await manager();
    //         const generateContent = htmlGenerator(answers);

    //         await writeFileAsync('./utils/team.html', generateContent);
    //         console.log('✔️  Successfully wrote to README.md');
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // init();


    // function generateMarkdown(data) {
    //     return `<h1 align="center">${answers.projectTitle} </h1>
      
    //     ## Table of Contents
    //     - [Description](#description)
    //     - [Installation](#installation)
    //     - [Usage](#usage)
    //     - [License](#license)
    //     - [Contributing](#contributing)
    //     - [Tests](#tests)
    //     - [Questions](#questions)
        
        
    //     ## Description
    //     ${answers.description}
      
    //     ## Installation
    //     ${answers.installation}
    //     ## Usage
    //     ${answers.usage}
    //     ## License
    //     ${answers.license}
    //     <br />
    //     This application is covered by the ${answers.license} license. 
    //     ## Contributing
    //     ${answers.contributing}
    //     ## Tests
    //     ✏️ ${answers.tests}
    //     ## Questions
    //     ${answers.questions}<br />
    //     <br />
    //     Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
    //     <br />
    //     Have questions? Email me at: ${answers.email}<br /><br />
    //     _This README was generated by [README-generator]((https://github.com/leediamo)_
    //         `;
    //   }