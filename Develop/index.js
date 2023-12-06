// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  { type: 'input', name: 'title', message: 'What is your project title?' },
  { type: 'input', name: 'description', message: 'Provide a description of the project:' },
  { type: 'input', name: 'installation', message: 'What are the installation instructions?' },
  { type: 'input', name: 'usage', message: 'Provide the usage information:' },
  { type: 'input', name: 'contributing', message: 'What are the contribution guidelines?' },
  { type: 'input', name: 'tests', message: 'What are the test instructions?' },
  { type: 'list', name: 'license', message: 'Choose a license for your project:', choices: ['MIT', 'GPLv3', 'Apache', 'None'] },
  { type: 'input', name: 'github', message: 'Enter your GitHub Username:' },
  { type: 'input', name: 'email', message: 'Enter your email address:' }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('Successfully created README.md!');
  });
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('README.md', generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
