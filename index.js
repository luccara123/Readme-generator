// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./Utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    // PROJECT NAME
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },

    // PROJECT DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter the project description to continue!');
                return false;
            }
        }
    },

    //INSTALLATION
    {
        type: 'input',
        name: 'installation',
        message: 'How the project should be installed? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to enter the installation information to continue!');
                return false;
            }
        }
    },

    //USAGE
    {
        type:'input',
        name: 'usage',
        message: 'How do you use this project (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to enter information on how to use your project to continue!');
                return false;
            }
        }
    },

    //CONTRIBUTION
    {
        type: 'input',
        name: 'contribution',
        message: 'How people can contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to enter information on how to contribe to your project to continue!');
                return false;
            }
        }
    },

    //TESTING
    {
        type: 'input',
        name: 'testing',
        message: 'How this project should be tested? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test your project to continue!');
                return false;
            }
        }
    },

    //LICENSE
    {
        type: 'checkbox',
        name: 'licesing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingCheckbox => {
            if (licensingCheckbox) {
                return true;
            } else {
                console.log('You must choose a license for the project to continue!');
                return false;
            }
        }
        
    },

    //GITHUB NAME
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must enter your github username to continue');
                return false;
            }
        }
    },

    //EMAIL ADDRESS
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter your email address!');
                return false;
            }
        }
    },
]

// TODO: Create a function to write README file
function writeToFile(fileNmae, data){
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) => {
        if (err)
          throw err;
          console.log("Your information was transferred to the README!");
    } )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => 
    writeToFile(response.title, response));
}

// Function call to initialize app
init();

