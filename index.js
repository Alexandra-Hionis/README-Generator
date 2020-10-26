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
        name: "Table of Contents",
        message: "List the main focal points. Ex: Installation, Usage, Contributing, License "
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
function init() {

}

// function call to initialize program
init();







function generate(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
