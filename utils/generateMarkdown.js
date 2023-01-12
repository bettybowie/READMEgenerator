// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  } else {
    return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'EPL_1.0') {
    return `https://opensource.org/licenses/EPL-1.0`;
  } else if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === 'Apache_2.0') {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === 'GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else {
    return '';
};}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under ${license} license.`;
  } else {
    return '';
};}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({username, email, title, description, license, installation, usage, contribution, test}) =>
   `# ${title}
   ${renderLicenseBadge(license)}[${renderLicenseLink(license)}]
   
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
   
   ${renderLicenseSection(license)}
   
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
