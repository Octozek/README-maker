const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to generate README content based on user input
function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} License.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
For any questions, please contact ${answers.email}. You can also visit my [GitHub profile](https://github.com/${answers.githubUsername}).
`;
}

// Function to prompt user with questions and generate README
function init() {
  inquirer.prompt(questions).then((answers) => {
    const READMEContent = generateREADME(answers);
    fs.writeFile('README.md', READMEContent, (err) => {
      if (err) throw err;
      console.log('README.md successfully generated!');
    });
  });
}

// Call the init function to start the process
init();
