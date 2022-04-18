// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [

    // PROJECT NAME
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
    },

    // PROJECT DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project. (Required)',
    },
    
    //INSTALLATION
    {
        type: 'input',
        name: 'installation',
        message: 'How the project should be installed? (Required)',
    },

    //USAGE
    {
        type:'input',
        name: 'usage',
        message: 'How do you use this project (Required)',
    },

    //CONTRIBUTION
    {
        type: 'input',
        name: 'contribution',
        message: 'How people can contribute to this project?',
    },

    //TESTING
    {
        type: 'input',
        name: 'testing',
        message: 'How this project should be tested? (Required)',
    },

    //LICENSE
    {
        type: 'checkbox',
        name: 'licesing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    },

    //GITHUB NAME
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username. (Required)',
    },

    //EMAIL ADDRESS
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
    },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

