let total = "";
function calculate(num) {
  if (num == "=") {
    if (
      total.substring(total.length - 1, total.length) == "+" ||
      total.substring(total.length - 1, total.length) == "-" ||
      total.substring(total.length - 1, total.length) == "*" ||
      total.substring(total.length - 1, total.length) == "/"
    ) {
      total = total.substring(0, total.length - 1);
    }
    document.getElementById("inputBox").value =
      total == "" ? "" : (total = eval(total));
  } else if (num == "clear") {
    total = "";
    document.getElementById("inputBox").value = "";
  } else {
    total += num;
    document.getElementById("inputBox").value = total;
  }
}
