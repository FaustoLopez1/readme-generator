const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your Project Title.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Why did you build this project?',
        },
        {
            //table of contents
            type: 'checkbox',
            name: 'table',
            message: 'If your README is long, add a table of contents',
            choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use in your own words?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose the best license for this project from this list.',
            choices: ["Unlicense", "MIT", "Mozilla Public", "Boost Software"],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Would like other developers to contribute it, include guidelines for how to do so.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Go the extra mile and write tests for your application',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Any Questions? Please refer to the github link',

        },
    ])
}

const init = () => {
    promptUser()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => {
            const mdPageContent = generateMarkdown(answers);
            console.log(answers)
            console.log(mdPageContent)

            fs.writeFile('README.md', mdPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created Read.me!')
            );
        })
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};


init();

