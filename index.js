const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);



// array of questions for user
const questions = [
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a project description:"
      },
      {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed: "
      },
      {
        type: "input",
        name: "license",
        message: "What license did you use?"
      },
      {
          type: "input",
          name: "contributing",
          message: "Who are the contributors of this project?"
      },
      {
          type: "input",
          name: "tests",
          message: "Please enter any test instructions here:"
      },
      {
          type: "input",
          name: "questions",
          message: "Please enter any questions or proposals for future work:"
      },
      {
          type: "input",
          name: "gitHub",
          message: "Please enter your GitHub username:",
      },
      {
          type: "input",
          name: "email",
          message: "Please enter your email address: ",
      },
        
    ];

// function to initialize program
async function init() {
    try {
      const answers = await promptUser();
  
      const generateReadMeContent = generateMarkdown(answers);
  
      await writeFileAsync('README.md', generateMarkdown);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }

    generateMarkdown(answers);
  }


  const promptUser = () => {
    return inquirer
        .prompt(questions);
}

// function to write README file
const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}

// function call to initialize program
init();


