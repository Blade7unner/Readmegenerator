// TODO: Include packages needed for this application
// index.js
const inquirer = require('inquirer');
const fs = require('fs'); // To write the README file
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    // Add more questions here
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project:',
    },
    // ...you can add additional questions for installation, usage, etc.
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
