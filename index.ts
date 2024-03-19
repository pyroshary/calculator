#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstnumber" },
  { message: "Enter your second number", type: "number", name: "secondnumber" },
  {
    message: "select one the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);
//conditonal statement

if (answer.operator === "Addition") {
  console.log(answer["firstnumber"] + answer["secondnumber"]);
} else if (answer.operator === "Substraction")
  console.log(answer["firstnumber"]- answer["secondnumber"] );
else if (answer.operator === "Multiplication") {
  console.log(answer["firstnumber"]* answer["secondnumber"]);
} else if (answer.operator === "Division") {
  console.log(answer["firstnumber"]/ answer["secondnumber"]);
} else {console.log("please select valid operator")};

console.log("The end of calculator");
