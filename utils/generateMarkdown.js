const dedent = require("dedent");

function renderTitleSection(data) {
  return `# ${data.projectTitle}`
}

function renderDescSection(data) {
  if (data.licenseSelect == "No License") {
    return "## Description" + "\n\n" + `${data.projectDescription}`
  }
  else {
    return "## Description" + "\n" + `![badge](${renderLicenseBadge(data.licenseSelect)})` + "\n\n" + `${data.projectDescription}`
  }
}

function renderTableOfContents(data) {
  let tableOfContents = `## Table of Contents` + "\n"
  if (data.installConfirm == true && data.contributionConfirm == true) {
    tableOfContents += dedent`
                             * [Installation](#installation)
                             * [Usage](#usage)
                             * [Contributing](#contributing)`
  }
  else if (data.installConfirm == true && data.contributionConfirm == false) {
    tableOfContents += "\n" + dedent`
                                    * [Installation](#installation)
                                    * [Usage](#usage)
                                    * [License](#license)`
  }
  else if (data.installConfirm == false && data.contributionConfirm == true) {
    tableOfContents += "\n" + dedent`
                             * [Usage](#usage)
                             * [License](#license)
                             * [Contributing](#contributing)`
  }
  else if (data.installConfirm == false && data.contributionConfirm == false){
    tableOfContents += "\n" + dedent`
                             * [Usage](#usage)
                             * [License](#license)`
  }
  
  if (data.testingConfirm == true) {
    tableOfContents += "\n" + dedent`
                             * [Tests](#tests)`
  }

  if (data.licenseSelect == "No License") {
    tableOfContents = tableOfContents.replace("* [License](#license)", "");
  }

  tableOfContents += "\n" + dedent`
                           * [Questions](#questions)`;
  return tableOfContents;
}
function renderInstallationSection(data) {
  if (data.installConfirm == true) {
     return "## Installation" + "\n" + `${data.installInstruction}`
  }
  else {
    return ""
  }
}

function renderUsageSection(data) {
  return "## Usage" + "\n" + `${data.usageInfo}`
}

function renderContribSection(data) {
  if (data.contributionConfirm == true) {
    if (data.contributionGuide == "") {
      return dedent`## Contributing

      ### Our Pledge

      We as members, contributors, and leaders pledge to make participation in our
      community a harassment-free experience for everyone, regardless of age, body
      size, visible or invisible disability, ethnicity, sex characteristics, gender
      identity and expression, level of experience, education, socio-economic status,
      nationality, personal appearance, race, caste, color, religion, or sexual identity
      and orientation.

      We pledge to act and interact in ways that contribute to an open, welcoming,
      diverse, inclusive, and healthy community.

      ### Our Standards

      Examples of behavior that contributes to a positive environment for our
      community include:

      * Demonstrating empathy and kindness toward other people
      * Being respectful of differing opinions, viewpoints, and experiences
      * Giving and gracefully accepting constructive feedback
      * Accepting responsibility and apologizing to those affected by our mistakes,
        and learning from the experience
      * Focusing on what is best not just for us as individuals, but for the
        overall community

      Examples of unacceptable behavior include:

      * The use of sexualized language or imagery, and sexual attention or
        advances of any kind
      * Trolling, insulting or derogatory comments, and personal or political attacks
      * Public or private harassment
      * Publishing others' private information, such as a physical or email
        address, without their explicit permission
      * Other conduct which could reasonably be considered inappropriate in a
        professional setting

      ### Enforcement Responsibilities

      Community leaders are responsible for clarifying and enforcing our standards of
      acceptable behavior and will take appropriate and fair corrective action in
      response to any behavior that they deem inappropriate, threatening, offensive,
      or harmful.

      Community leaders have the right and responsibility to remove, edit, or reject
      comments, commits, code, wiki edits, issues, and other contributions that are
      not aligned to this Code of Conduct, and will communicate reasons for moderation
      decisions when appropriate.

      ### Scope

      This Code of Conduct applies within all community spaces, and also applies when
      an individual is officially representing the community in public spaces.
      Examples of representing our community include using an official e-mail address,
      posting via an official social media account, or acting as an appointed
      representative at an online or offline event.

      ### Enforcement

      Instances of abusive, harassing, or otherwise unacceptable behavior may be
      reported to the community leaders responsible for enforcement at
      [INSERT CONTACT METHOD].
      All complaints will be reviewed and investigated promptly and fairly.

      All community leaders are obligated to respect the privacy and security of the
      reporter of any incident.

      ### Enforcement Guidelines

      Community leaders will follow these Community Impact Guidelines in determining
      the consequences for any action they deem in violation of this Code of Conduct:

      #### 1. Correction

      **Community Impact**: Use of inappropriate language or other behavior deemed
      unprofessional or unwelcome in the community.

      **Consequence**: A private, written warning from community leaders, providing
      clarity around the nature of the violation and an explanation of why the
      behavior was inappropriate. A public apology may be requested.

      #### 2. Warning

      **Community Impact**: A violation through a single incident or series
      of actions.

      **Consequence**: A warning with consequences for continued behavior. No
      interaction with the people involved, including unsolicited interaction with
      those enforcing the Code of Conduct, for a specified period of time. This
      includes avoiding interactions in community spaces as well as external channels
      like social media. Violating these terms may lead to a temporary or
      permanent ban.

      #### 3. Temporary Ban

      **Community Impact**: A serious violation of community standards, including
      sustained inappropriate behavior.

      **Consequence**: A temporary ban from any sort of interaction or public
      communication with the community for a specified period of time. No public or
      private interaction with the people involved, including unsolicited interaction
      with those enforcing the Code of Conduct, is allowed during this period.
      Violating these terms may lead to a permanent ban.

      #### 4. Permanent Ban

      **Community Impact**: Demonstrating a pattern of violation of community
      standards, including sustained inappropriate behavior,  harassment of an
      individual, or aggression toward or disparagement of classes of individuals.

      **Consequence**: A permanent ban from any sort of public interaction within
      the community.

      ### Attribution

      This Code of Conduct is adapted from the [Contributor Covenant][homepage],
      version 2.0, available at
      [https://www.contributor-covenant.org/version/2/0/code_of_conduct.html][v2.0].

      Community Impact Guidelines were inspired by 
      [Mozilla's code of conduct enforcement ladder][Mozilla CoC].

      For answers to common questions about this code of conduct, see the FAQ at
      [https://www.contributor-covenant.org/faq][FAQ]. Translations are available 
      at [https://www.contributor-covenant.org/translations][translations].

      [homepage]: https://www.contributor-covenant.org
      [v2.0]: https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
      [Mozilla CoC]: https://github.com/mozilla/diversity
      [FAQ]: https://www.contributor-covenant.org/faq
      [translations]: https://www.contributor-covenant.org/translations
      `
    }
    else {
      return "## Contributing" + "\n" + `${data.contributionGuide}`
    }
  }
  else {
    return ""
  }
}

function renderTestSection(data) {
  if (data.testingConfirm == true) {
    return dedent`## Tests
    
    ${data.testingInstructions}`
  }
  else {
    return ""
  }
}

function renderQuestionSection(data) {
  return dedent`## Questions

  If you have any questions feel free to reach me at:

  GitHub: ${data.githubUsername}
  
  Email: ${data.emailAddress}`
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.replace(/ /g, "%20");
  return dedent`https://img.shields.io/static/v1?label=license&message=${license}&color=green`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "https://spdx.org/licenses/Apache-2.0.html"
  }
  else if (license === "GNU GPLv2") {
    return "https://spdx.org/licenses/GPL-2.0-or-later.html"
  }
  else if (license === "GNU GPLv3") {
    return "https://spdx.org/licenses/GPL-3.0-or-later.html"
  }
  else if (license === "MIT") {
    return "https://spdx.org/licenses/MIT.html"
  }
  else if (license === "ISC") {
    return "https://spdx.org/licenses/ISC.html"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  }
  else {
    return dedent`## License 

    URL to License: ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSec = renderLicenseSection(data.licenseSelect);
  return renderTitleSection(data) + "\n\n" +
  renderDescSection(data) + "\n\n" +
  renderTableOfContents(data) + "\n\n" +
  renderInstallationSection(data) + "\n\n" +
  renderUsageSection(data) + "\n\n" +
  licenseSec + "\n\n" +
  renderContribSection(data) + "\n\n" +
  renderTestSection(data) + "\n\n" +
  renderQuestionSection(data);

}

module.exports = generateMarkdown;
