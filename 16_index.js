const prompt = require("prompt-sync")();
let birthyear = number(prompt("Enter your birth year: "));
let age =2026 - birthyear;
console.log("Your age is: ", age);
