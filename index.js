const inquirer=require("inquirer");
const fs=require("fs");

inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is your project name?"
},{
    type: "input",
    name: "describe",
    message:"Describe your project and what it does?"
},{
    type: "input",
    name:"installation",
    message:"How do you install the project?"
},{
    type: "input",
    name:"usage",
    message: "How will you plan on using this project"
},{
    type: "input",
    name:"license",
    message: "Who can license this project"
},{
   
    type: "input",
    name:"contribute",
    message: "Who are the contributors"
},{
    type: "input",
    name:"test",
    message: "Number of Test?"

}]).then (response=>{
    const name = response.name;
    const description = response.describe;
    const install = response.installation;
    const usage = response.usage;
    const license = response.license;
    const contribute = response.contribute;
    const test = response.test;





    let template =`
    * At least one badge
    * Project title : ${name}
    * Description : ${description}
    * Table of Contents
    * Installation : ${install}
    * Usage :${usage}
    * License : ${license}
    * Contributors: ${contribute}
    * Tests: ${test}
    * Questions
      * User GitHub profile picture
      * User GitHub email
    `;
        fs.writeFile("ReadMe.md",template,error => {
            if (error){
               throw error;
            } else {
                console.log ("Read Me generated");
            }
        });

});


