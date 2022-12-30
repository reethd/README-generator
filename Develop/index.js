// TODO: Include packages needed for this application
const markdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is the title of the project?",
  },
  {
    name: "description",
    message: "Enter a description of the project.",
  },
  {
    name: "installation",
    message: "Enter instructions for installation.",
  },
  {
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    name: "contributing",
    message: "Provide some guidelines on how to contribute to this project.",
  },
  {
    name: "tests",
    message: "How can a user test this application?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license from the list.",
    choices: [
      "Apache",
      "GNUGPLv3",
      "ISC",
      "MIT",
      "MozillaPublicLicense",
      "none",
    ],
  },
  {
    name: "githubUsername",
    message: "Enter your github username",
  },
  {
    name: "email",
    message: "Enter your email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdown(data), (err, data) => {
    console.log("Readme created!");
  });
}

// TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(questions).then((readme) => {
//     console.log(readme);
// writeToFile('README.md', readme);
//
//     );
//   });
// }

async function init() {
  const readme = await inquirer.prompt(questions);
  writeToFile("README.md", readme);
  console.log(readme);
}

// Function call to initialize app
init();

