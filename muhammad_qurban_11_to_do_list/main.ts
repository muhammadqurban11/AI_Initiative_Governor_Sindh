import inquirer from "inquirer";
let toDos = [];
 
let taskAdd = await inquirer.prompt(
    [
        {
            name: "todo",
            type:  "input",
            message: "What do you want to do?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to addMore",
            default: "true"


        }
    ]
);
toDos.push
console.log(taskAdd.todo)



