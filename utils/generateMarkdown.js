// function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.projectTitle}</h1>
## Description
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
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
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.questions}<br />
<br />
Email me with any questions: ${answers.email}<br /><br />
`;
}
module.exports = generateMarkdown;
