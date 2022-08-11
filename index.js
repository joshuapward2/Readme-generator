// TODO: Include packages needed for this application
const markDown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input




const questions = [
    {
        type: 'input',
        message: 'Whats your projects title name?(Required)',
        name: 'title',
        validate: (titleInput) => {
            if (titleInput) {
                return true
            }
            else {
                console.log('You need to enter a project description!');
                return false
            }

        }
    },

    {
        type: 'input',
        message: 'Please add a description of your project here.(Required)',
        name: 'description',
        validate: (descriptionInput) => {
            if (descriptionInput) {

                return true
            }
            else {
                console.log('You need to enter a project description!');
                return false
            }
        }
    },

    {
        type: 'input',
        message: 'Please enter any installation instructions that a user may require to operate your app here',
        name: 'installation',
        validate: (installInput) => {
            if (installInput) {

                return true
            }
            else {
                console.log('Please enter installation information here!  If theyre no instructions for app to run please answer with, no instructions required!');
                return false
            }

        }
    },

    {
        type: 'input',
        message: 'Please enter any usage information for your application',
        name: 'usage',
        validate: (usageInput) => {
            if (usageInput) {

                return true
            }
            else {
                console.log('Please enter any usage information here!');
                return false
            }

        }
    },

    {
        type: 'input',
        message: 'Please enter any information regarding any contributing factors for your application',
        name: 'contribution',
        validate: (contributionInput) => {
            if (contributionInput) {

                return true
            }
            else {
                console.log('Please enter any contribution guidlines here!');
                return false
            }

        }
    },

    {
        type: 'input',
        message: 'Please enter any information regarding test for your application',
        name: 'test',
        validate: (testInput) => {
            if (testInput) {

                return true
            }
            else {
                console.log('Please enter any contribution guidlines here!');
                return false
            }

        }
    },

    {
        type: 'checkbox',
        message: 'Please select any licenses that apply to this project',
        name: 'instructions',
        choices: ['General public license(GPL)', 'The Apache License', 'Microsoft Public Licenses(MS-PL)', 'Berkely Software Distribution(BSD)']
    },

]

inquirer.prompt(questions).then((answers) => {
    console.log(answers.instructions)
    fs.writeFileSync('./dist/README.md', `
    # Table of contents

* [1.Title](#table-of-contents-1.-Title)
* [2.Licenses](#table-of-contents-2.Licenses)
* [3.Description](#table-of-contents-3.-Description)
* [4.Installation Instructions](#table-of-contents-4.Installation-Instructions)
* [5.Usage Information](#table-of-contents-5.Usage-Information)
* [6.Contributions](#table-of-contents-6.-Contributiions)
* [7.Tests](#Tests)


# Title


## ${answers.title}


# Licenses


![License](https://img.shields.io/badge/${answers.instructions}-blue.svg)


# Description


## ${answers.description}



# Installation-Instruction


## ${answers.installation}


# Usage-information


## ${answers.usage}


# Contributions 


## ${answers.contribution}


# Tests

## ${answers.test}

    `)
})





// function examples that starter code provided/Went a different route


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
