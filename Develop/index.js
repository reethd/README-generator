// TODO: Include packages needed for this application
const inquirer = require("inquirer");
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
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "BSD 2-Clause License",
      "CC0",
      "Attribution 4.0 International",
      "Attribution-ShareAlike 4.0 International",
      "Attribution-NonCommercial 4.0 International",
      "Attribution-NoDerivates 4.0 International",
      "Attribution-NonCommmercial-ShareAlike 4.0 International",
      "Attribution-NonCommercial-NoDerivatives 4.0 International",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "GNU GPL v2",
      "GNU AGPL v3",
      "GNU LGPL v3",
      "GNU FDL v1.3",
      "The Hippocratic License 2.1",
      "The Hippocratic License 3.0",
      "IBM Public License Version 1.0",
      "ISC License (ISC)",
      "The MIT License",
      "Mozilla Public License 2.0",
      "Attribution License (BY)",
      "Open Database License (ODbL)",
      "Public Domain Dedication and License (PDDL)",
      "The Perl License",
      "The Artistic License 2.0",
      "SIL Open Font License 1.1",
      "The Unlicense",
      "The Do What the Fuck You Want to Public License",
      "The zlib/libpng License",
    ],
  },
  {
    name: "github-username",
    message: "Enter your github username",
  },
  {
    name: "email",
    message: "Enter your email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
