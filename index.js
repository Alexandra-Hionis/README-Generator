const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

generateMarkdown();


// array of questions for user
function promptUser() {
    return inquirer.prompt([
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
        name: "Installation",
        message: "What are the steps required to install your project?"
      },
      {
        type: "input",
        name: "Usage",
        message: "Provide instructions and examples for use. Include screenshots as needed: "
      },
      {
        type: "input",
        name: "License",
        message: "What license did you use?"
      },
      {
          type: "input",
          name: "Contributing",
          message: "Who are the contributors of this project?"
      },
      {
          type: "input",
          name: "Tests",
          message: "Please enter any test instructions here:"
      },
      {
          type: "input",
          name: "Questions",
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
        
    ]);
  }



// function to write README file
const writeFileAsync = util.promisify(fs.writeFile);



// function to initialize program
async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const generateReadMeContent = generateMarkdown(answers);
  
      await writeFileAsync('./dist/README.md', generateMarkdown);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }

// function call to initialize program
init();








