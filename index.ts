#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
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
