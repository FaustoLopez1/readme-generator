// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(data) {

  return `


  # ${data.title}

  ![alt text](https://img.shields.io/badge/Description-blue)
  
  ${data.description}


  ![alt text](https://img.shields.io/badge/TableofContents-purple)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

![alt text](https://img.shields.io/badge/Installation-red)

The steps to use and install this project are as follow, ${data.installation}

![alt text](https://img.shields.io/badge/Usage-green)


The way to use this app is, ${data.usage}

![alt text](https://img.shields.io/badge/Credits-blue)

Here are the links to my fellow collaborators/third-party links, ${data.contributing}

![alt text](https://img.shields.io/badge/License-green)

Licensed under the ${data.license} license.

`;
}

module.exports = generateMarkdown;


