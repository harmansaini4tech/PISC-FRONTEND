function calculate(message) {
  let output = document.getElementById("output");
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;

  if (number1 === "" || number2 === "" || isNaN(number1) || isNaN(number2)) {
    output.innerHTML = "Please Enter Numbers";
    return;
  }

  if (message == "add") {
    output.innerHTML = Number(number1) + Number(number2);
  } else if (message == "sub") {
    output.innerHTML = Number(number1) - Number(number2);
  } else if (message == "mul") {
    output.innerHTML = Number(number1) * Number(number2);
  } else if (message == "div") {
    output.innerHTML = Number(number1) / Number(number2);
  }
}
