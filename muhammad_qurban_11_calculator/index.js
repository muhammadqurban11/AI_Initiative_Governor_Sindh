#!/usr/bin/env node
import inquirer from "inquirer";
const simpleCalculator = await inquirer.prompt([
    {
        message: "Enter the 1st Number",
        type: "number",
        name: "firstnumber",
    },
    {
        message: "Enter the 2nd Number",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "Select the Operations From Below",
        type: "list",
        name: "operator",
        choices: ["addition", "subtruction", "multiplication", "division"],
    },
]);
if (simpleCalculator.operator === "addition") {
    console.log(simpleCalculator.firstnumber +
        simpleCalculator.secondnumber);
}
else if (simpleCalculator.operator === "subtruction") {
    console.log(simpleCalculator.firstnumber - simpleCalculator.secondnumber);
}
else if (simpleCalculator.operator === "multiplication") {
    console.log(simpleCalculator.firstnumber * simpleCalculator.secondnumber);
}
else if (simpleCalculator.operator === "division") {
    console.log(simpleCalculator.firstnumber / simpleCalculator.secondnumber);
}
else {
    console.log("Invalid Operation");
}
