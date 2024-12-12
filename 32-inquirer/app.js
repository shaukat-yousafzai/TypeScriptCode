import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "userName",
        type: "input",
        message: "what is your name?:",
        validate: (ans) => {
            if (!ans) {
                return "please give your name";
            }
            return true;
        }
    },
    {
        name: "userAge",
        type: "number",
        message: "what is  your Age?:",
    },
    {
        type: "list",
        name: "userHobby",
        message: "what is your hoppy?:",
        choices: ["criket", "football", "gaming"],
        default: "nothing"
    },
    {
        type: "checkbox",
        name: "userEmail",
        message: "what is your emails?:",
        choices: ["criket@test.com", "football@test.com", "gaming@test.com"],
        default: "nothing"
    }
]);
// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
console.log(answers);
