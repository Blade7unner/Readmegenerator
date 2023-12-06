// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  // Include other questions for description, installation, etc.
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README.md has been generated!');
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
