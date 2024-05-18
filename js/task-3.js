const inputElem = document.getElementById("name-input");
const spanElem = document.getElementById("name-output");

console.log(inputElem);
console.log(spanElem);

function handleOnInput(event) {
  // const input = "";
  const inputValue = event.currentTarget.value;
  if (inputValue === "" || inputValue === " ") {
    spanElem.textContent = "Anonymous";
  }
  spanElem.textContent = inputValue.trim();
}

inputElem.addEventListener("input", handleOnInput);
