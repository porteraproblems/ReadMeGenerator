const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require ("util");

const writeFileAsync = util.promisify(fs.writeFile);

//ask user for user input
const promptUser = () => {
    inquirer.prompt([{
        type: "input",
        message: "What is your GitHub user name?",
        name: "githubName"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What repo is this Readme for?",
        name: "githubRepo"
    },
    {
        type: "input",
        message: "What's is your project's name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "What's is your project's description?",
        name: "descriptionText"
    },
    {
        type: "input",
        message: "What's is your project's installation instructions?",
        name: "installationText"
    },
    {
        type: "input",
        message: "What's is your project's usage guide?",
        name: "usageText"
    },
    {
        type: "input",
        message: "What's is the name of your usage image?",
        name: "usageImg"
    },
    {
        type: "list",
        message: "Which license does the project utilize?",
        choices:[
            "Apache",
            "GNU General Public",
            "MIT",
            "BSD 2-Clause Simplified",
            "BSD 3-Clause Revised",
            "Boost Software",
            "Creative Commons Zero 1.0",
            "Eclipse Public,",
            "GNU Affero General Public",
            "GNU General Public",
            "GNU Lesser General Public",
            "Mozilla Public",
            "The Unilicense"
        ],
        name: "license"
    },
    {
        type: "input",
        message: "How can people contribute to the project?",
        name: "contributeText"
    },
    {
        type: "input",
        message: "Who has contributed to the success of this project so far?",
        name: "creditsText"
    },
    {
        type: "input",
        message: "How can the code be tested?",
        name: "testText"
    }
    ]).then (function(response) {
        console.log(response);
        let markdown = generateMarkdown(response);

        writeFileAsync("README.md", markdown).then( 
            err => console.log("Success!")
        );
    })
}
//generate markdown string from user input 
function generateMarkdown(response) {
    let markdownString = 
`# ${response.projectName}
![Badge license ${response.license}](https://img.shields.io/badge/license-${response.license}-green)
## Description 
${response.descriptionText}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${response.installationText}
## Usage 
![Image of ${response.usageImg}](https://github.com/${response.githubName}/${response.githubRepo}/blob/main/assets/images/${response.usageImg}.png)
${response.usageText}
## License
This repo is licenced under the ${response.license} license.
## Contributing
${response.contributeText}
## Tests
${response.testText}
## Credits
${response.creditsText}
## Questions
Please send any questions to my email: <${response.email}>
`
    return(markdownString)
}

//always run the user prompt
promptUser();