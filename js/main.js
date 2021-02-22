//A simple calculator that has two inputs and returns the result of +,-,/,* somewhere in the DOM

//Take 2 inputs (numbers)
//Allow user to choose 1 of the 4 main operators
//return result for that equation.

document.querySelector("#getResult").addEventListener('click', equation)

function equation() {
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let output = document.querySelector("#output");
let operator = document.getElementById("operator").value;

output.innerText= " ";

  if (operator === "+") {
    output.innerText = `${num1} + ${num2} = ${num1 + num2}`;
  } else if (operator ==="-") {
    output.innerText = `${num1} - ${num2} = ${num1 - num2}`;
  } else if (operator ==="*") {
    output.innerText = `${num1} * ${num2} = ${num1 * num2}`;
  } else if (operator ==="/") {
    output.innerText = `${num1} / ${num2} = ${num1 / num2}`;
  } else {
    output.innerText = `not a valid input`
  }
}
