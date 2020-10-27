// function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.title}</h1>
## Description
 ${answers.description}
## Table of Contents
- [Description](#description)
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
${answers.license}
<br />
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.questions}<br />
<br />
GitHub: ${answers.github}<br /><br />
Email: ${answers.email}<br /><br />
Copyright 2020 &copy;`;
}

module.exports = generateMarkdown;
