const inquirer = require('');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const questions = () => {
//github username
inquirer
    .prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        // What is your email address?
        {
            type: 'input',
            name: 'email',
            message: 'What is your email addess?',
        },
        // What is your project's name?
        {
            type: 'input',
            name: 'project',
            message: "What is your project's name?",
        },
        // Please write a short description of your project
        {
            type: 'input',
            name: 'projectInfo',
            message: 'Please write a short description of your project'
        },
        // What kind of license should your project have?
        {
            type: 'list',
            message: 'What kind of liscense should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
        },
        // What command should be run to install dependencies?
        {
            type: 'input',
            name: 'instDep',
            message: 'What command should be run to install depenencies?'
        },
        // What command should be run to run tests?
        {
            type: 'input',
            name: 'tests',
            message: 'What commance should be run to run tests?'
        },
        // What does the user need to know about using the repo?
        {
            type: 'input',
            name: 'userInfo',
            message: 'What does the user need to know about using the repo?',
        },
        // What does the user need to know about contributing to the repo?
        {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ]).then(function(answer) {
        console.log(answer);
        var README = generateMarkdown(answer);
        writeFileSync ("README.md", README).then(
            err => console.log("Success!")
        );
    })
}

// function to write README file
function generateMarkdown(answer){
    var READMEString = 
    `# ${answer.projectName}
    [![License](https://img.shields.io/badge/license-apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

    ## Description

    ${answer.projectDescription}

    ## Table of Contents
    * [video](#video)
    * [installation](#installation)
    * [usage](#usage)
    * [license](#license)
    * [contrubuting](#contributing)
    * [tests](#tests)
    * [questions](#questions)
    * ## Installation
    ${answer.installDep}
    ## Usage
    ![image]
    ${answer.usingRepo}
    ## License
    ${answer.license}
    ![image]
    ## Contributing
    ${answer.contributeRepo}
    ## Tests
    ${answer.commandTest}
    ## Questions
    If you have any questions about the repo, please open an issue or contact me directly at <${answer.email}>.
    You can find more of my work at ${answer.gitHubName} .`
        return(READMEString)
    }
    
    questions();