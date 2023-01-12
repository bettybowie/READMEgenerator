// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({username, email, title, description, license, installation, usage, contribution, test}) =>
   `# ${title}
   badge
   
   ## Description
   
   ${description}
   
   ## Table of Contents
   
   * [Installation](#Installation)
   
   * [Usage](#usage)
   
   * [License](#license)
   
   * [Contributing](#contributing)
   
   * [Tests](#tests)
   
   * [Questions](#questions)
   
   ## Installation
   
   To install necessary dependencies, run the following command:
   
   ~~~
  ${installation}
   ~~~
   
   ## Usage
   
   ${usage}
   
   ## License
   
   This project is licensed under the ${license} license.
   
   ## Contributing
   
   ${contribution}
   
   ## Tests
   
   To run tests, run the following command:
   
   ~~~
   ${test}
   ~~~
   
   ## Questions
   
   If you have any questions about the repo, open an issue or contact me.
   My GitHub is [${username}] (https://github.com/${username}/).
   My email address is ${email}.

`;


module.exports = generateMarkdown;
