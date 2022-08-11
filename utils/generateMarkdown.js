// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {



  if(license){
    return `
    ${license}
    `
    // return 
  }
  else{
    console.log('No license link will be displayed')
    return emptyString
  }

 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let emptyString = ' ';

  if(license) {
    return true;
  }

  else{
    console.log('No license link will be displayed')
    return emptyString
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}

  # License
  ${renderLicenseBadge(data.instructions)}

`;
}

module.exports = generateMarkdown;
