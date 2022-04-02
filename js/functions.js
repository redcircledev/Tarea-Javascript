var starting_value = 0;
var value_1 = 0;
var value_2 = 0;
var var_operator = "";

window.onload = function () {
  document.getElementById("myScreen").innerHTML = starting_value;
};

function setNumber(number) {
  var current_value_on_screen = document.getElementById("myScreen").textContent;

  if (number == ".") {
    if (current_value_on_screen.includes(".")) {
      return 0;
    }
  }

  if (current_value_on_screen == "0") {
    document.getElementById("myScreen").innerHTML = number;
  } else {
    var new_value_on_screen =
      document.getElementById("myScreen").textContent + String(number);
    document.getElementById("myScreen").innerHTML = new_value_on_screen;
  }
}

function clearMyScreen() {
  document.getElementById("myScreen").innerHTML = "0";
}

function setOperator(operator) {
  this.value_1 = Number(document.getElementById("myScreen").textContent);
  this.var_operator = operator;
  console.log(this.var_operator);
  this.clearMyScreen();
}

function calculateResult() {
  this.value_2 = Number(document.getElementById("myScreen").textContent);
  if (this.var_operator == "+") {
    document.getElementById("myScreen").innerHTML = this.value_1 + this.value_2;
  } else if (this.var_operator == "-") {
    document.getElementById("myScreen").innerHTML = this.value_1 - this.value_2;
  } else if (this.var_operator == "/") {
    document.getElementById("myScreen").innerHTML = this.value_1 / this.value_2;
  } else if (this.var_operator == "*") {
    document.getElementById("myScreen").innerHTML = this.value_1 * this.value_2;
  }

  this.var_operator = "";
  this.value_1 = 0;
  this.value_1 = 0;
}