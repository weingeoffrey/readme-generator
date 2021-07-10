// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "projectTitle",
        message: "What is the title of your project?",
        type: "input",
    },
    {
        name: "projectDescription",
        message: "Enter a description for your project:",
        type: "input",
    },
    {
        name: "installConfirm",
        message: "Does your project require any installation instructions?",
        type: "confirm",
        default: "true",
    },
    {
        name: "installInstruction",
        message: "Enter your installation instructions:",
        type: "input",
        when: answers => !!answers.installConfirm,
    },
    {
        name: "usageInfo",
        message: "Enter how to use your project:",
        type: "input",
    },
    {
        name: "contributionConfirm",
        message: "Are there any contribution guidelines?",
        type: "confirm",
        default: "true",
    },
    {
        name: "contributionGuide",
        message: "Enter the contribution guidelines (leave blank for Contributor Covenant Code of Conduct):",
        type: "input",
        when: answers => !!answers.contributionConfirm,
    },
    {
        name: "testingConfirm",
        message: "Are there any testing instructions?",
        type: "confirm",
        default: "true",
    },
    {
        name: "testingInstructions",
        message: "Enter testing instructions:",
        type: "input",
        when: answers => !!answers.testingConfirm,
    },
    {
        name: "licenseSelect",
        message: "Select a license from the following list:",
        type: "list",
        choices: [
            "Apache",
            "GNU GPLv2",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "No License",
        ],
    },
    {
        name: "githubUsername",
        message: "Enter your GitHub username:",
        type: "input",
    },
    {
        name: "emailAddress",
        message: "Enter your email address (for questions relating to your project):",
        type: "input",
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        const content = fs.writeFileSync(fileName, data)
    } 
    catch (err) {
        console.error(err)
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readme = generateMarkdown(answers);
        writeToFile("./dist/README.md", readme)
    });
}

// Function call to initialize app
init();
