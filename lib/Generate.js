// acquiring modules and paths of inquirer and corresponding employee files
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");

// primary function to 
function Generate() {
    this.manager;
    this.engineer = [];
    this.intern = [];
}

// prompt for positiion inputs
Generate.prototype.initiatePrompt = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the manager's name:",
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log(`A name is required!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID:",
            validate: inputID => {
                if (inputID) {
                    return true;
                } else {
                    console.log(`An ID number is required!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:",
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log(`An email is required!`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Office Number:",
            validate: inputOfficeNumber => {
                if (inputOfficeNumber) {
                    return true;
                } else {
                    console.log("An office number is required!");
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email, officeNumber);
        this.initMainMenu();
    })
};

Generate.prototype.initMainMenu = function() {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please select an option?",
            choices: ["Add an Engineer", "Add an Intern", "There are no more employees left - Generate the webpage!"]
        }
    ])
    .then(({menu}) => {
        if (menu === "Add an Engineer") {
            this.EngineerInfo();
        }
        if (menu === "Add an Intern") {
            this.InternInfo();
        }
        if (menu === "There are no more employees left - Generate the webpage!") {
            console.log(this.manager)
            console.log(this.engineer)
            console.log(this.intern)
            this.createHTMLfile();
        }
    })
};

Generate.prototype.EngineerInfo = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Engineer name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You must enter a name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`You must enter an ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`You must enter an email!`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "GitHub Username:",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("You must enter a GitHub username!");
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, github }) => {
        this.engineer.push(new Engineer(name, id, email, github));
        this.initMainMenu();
    })
};

Generate.prototype.InternInfo = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the Intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You must enter a name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`You must enter an ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`You must enter an email!`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Attending School name:",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("You must enter a school name!");
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, school }) => {
        this.intern.push(new Intern(name, id, email, school));
        this.initMainMenu();
    })
};


Generate.prototype.createHTMLfile = function () {
        fs.writeFile('./dist/index.html',
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calvin's Profile Generator</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>The Team</h1>
            <main>
            ${this.genManager()}
            ${this.generatetheEngineer()}
            ${this.generatetheIntern()}
            </main>
        </body>
        </html>
        `,
        'utf8', err => {
            if (err) {
                throw (err);
            }
            console.log('The html has been created!');
    });
};


Generate.prototype.genManager = function() {
    return `
    <div class="card">
        <h2>${this.manager.retrieveName()}</h2>
        <h3>${this.manager.retrieveRole()}</h3>
        <p>ID: ${this.manager.retrieveId()}</p>
        <p>Email: <a class="link" target = _blank href="mailto:${this.manager.retrieveEmail()}">${this.manager.retrieveEmail()}</a></p>
        <p>Office Number: ${this.manager.retrieveOfficeNumber()}</p>
    </div>
    `
};

Generate.prototype.generatetheEngineer = function() {
    return `
        ${this.engineer.map(theengineers => {
            return `
                <div class="card">
                    <h2>${theengineers.retrieveName()}</h2>
                    <h3>${theengineers.retrieveRole()}</h3>
                    <p>ID: ${theengineers.retrieveId()}</p>
                    <p>Email: <a class="link" target = _blank href="mailto:${theengineers.retrieveEmail()}">${theengineers.retrieveEmail()}</a></p>
                    <p>GitHub: <a class="link" target = _blank href="https://github.com/${theengineers.retrieveGithub()}">${theengineers.retrieveGithub()}</a></p>
                </div>
            `
        })}
    `
};

Generate.prototype.generatetheIntern = function() {
    return `
        ${this.intern.map(theinterns => {
            return `
                <div class="card">
                    <h2>${theinterns.retrieveName()}</h2>
                    <h3>${theinterns.retrieveRole()}</h3>
                    <p>ID: ${theinterns.retrieveId()}</p>
                    <p>Email: <a class="link" target = _blank href="mailto:${theinterns.retrieveEmail()}">${theinterns.retrieveEmail()}</a></p>
                    <p>School: ${theinterns.retrieveSchool()}</p>
                </div>
            `
        })}
    `
};

module.exports = Generate;