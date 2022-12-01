const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
// -------------------------------------
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateProfile = require("./src/generateProfile.js");
//--------------------------------------
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

employeeArray = [];

//function startApp () {

    const promptManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Welcome Manager, what is your name?"
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter your desired employeeID (4 characters max))',           
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter a valid e-mail address',               
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter your Office Number',
            },
        ]).then(input => {
            const manager = new Manager(input.name, input.id, input.email, input.officeNumber);
            employeeArray.push(manager);

            newProfile()
        })
    };
//};

const newProfile = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Please select role for new team member or finish building team',
            choices: ['Engineer', 'Intern', "Finish Building Team"] 
        }
    ]).then(roleSelection => {
        switch (roleSelection.addMember) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                finishTeam();
        }
            
    });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engName",
            message: "What is the Enginner's name?"
        },
        {
            type: "input",
            name: "engID",
            message: "Enter assigned ID for enginner (4 characters max)" 
        },
        {
            type: "input",
            name: "engMail",
            message: "Enter a valid e-mail address"
        },
        {
            type: "input",
            name: "engGit",
            message: "Enter Engineer's GitHub username"
        }
    
        ]).then(input => {
          const engineer = new Engineer(input.engName, input.engID, input.engMail, input.engGit);
          employeeArray.push(engineer);
          
          newProfile();
        })
    };

    function addIntern() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "intName",
            message: "What is the Intern's name?"
          },
    
          {
            type: "input",
            name: "intID",
            message: "Enter assigned ID for enginner (4 characters max)"
          },
    
          {
            type: "input",
            name: "intMail",
            message: "Enter a valid e-mail address"
          },
    
          {
            type: "input",
            name: "intSchool",
            message: "What school is the intern from?"
          }
    
        ]).then(input => {
          const intern = new Intern(input.intName, input.intID, input.intMail, input.intSchool);
          employeeArray.push(intern);
          
          newProfile();
        });
    
      }

function finishTeam() {
    console.log("Generated New Team Profile")
    
    fs.writeFileSync(distPath, generateProfile(employeeArray), "utf-8");
}

promptManager();
