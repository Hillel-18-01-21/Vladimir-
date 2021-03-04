const typeEl = document.getElementById("type_operation");
const firstOperandEl = document.getElementById("firstOperand");
const secondOperandEl = document.getElementById("secondOperand");
const btnEl = document.getElementById("btn_result");
const resultsUl = document.getElementById("results");
const inputContainerEl = document.querySelector(".input_container");
const liTemplate = document.getElementById("li_template").innerHTML;

function onCalculation() {
  const firstOperand = +firstOperandEl.value;
  const secondOperand = +secondOperandEl.value;
  let result;

  if (firstOperandEl.value === "" || secondOperandEl.value === "") {
    return;
  }

  switch (typeEl.value) {
    case "sum":
      result = sum(firstOperand, secondOperand);
      break;
    case "different":
      result = diff(firstOperand, secondOperand);
      break;
    default:
      result = "please choose operation";
      break;
  }

  if (result === "" || result !== result) {
    onError();
    return;
  }

  const newLiEl = document.createElement("li");
  newLiEl.innerHTML = liTemplate.replace("{{text}}", result);

  resultsUl.append(newLiEl);
}

function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

btnEl.addEventListener("click", onCalculation);
inputContainerEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onCalculation();
  }
});
