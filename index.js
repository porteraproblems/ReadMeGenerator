const inquirer = require('');
const fs = require('fs');

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
            type: 'checkbox',
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
    ])
    .then(function() {
        console.log(functionname);
        var README
    })
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
