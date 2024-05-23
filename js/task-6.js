function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  divElem: document.getElementById("boxes"),
  inputElem: document.querySelector("input"),
  btnCreateElem: document.querySelector("[data-create]"),
  btnDestroyElem: document.querySelector("[data-destroy]"),
};

function createBoxes(amount) {
  // const arr = [];
  let boxTemplate = "";
  for (let i = 0; i < amount; i++) {
    // refs.divElem.innerHTML = ''
    // const color = getRandomHexColor();
    // const boxTemplate = document.createElement("div");
    // boxTemplate.style.width = `${i * 10 + 30}px`;
    // boxTemplate.style.height = `${i * 10 + 30}px`;
    // boxTemplate.style.backgroundColor = `${color}`;

    // refs.divElem.append(boxTemplate);

    boxTemplate += `<div style="width: ${i * 10 + 30}px; height: ${
      i * 10 + 30
    }px; background-color: ${getRandomHexColor()}"></div>`;
  }
  return boxTemplate;
  // refs.divElem.innerHTML = boxTemplate;
  // console.log(arr);
}

function handleBtnCreateElem() {
  // refs.divElem.innerHTML = "";
  const inputValue = Number(refs.inputElem.value);
  if (inputValue >= 1 && inputValue <= 100) {
    const markup = createBoxes(inputValue);
    refs.inputElem.value = "";

    refs.divElem.insertAdjacentHTML("beforeend", markup);
    // refs.divElem.innerHTML = markup;
  } else {
    alert("Please enter a number between 1 and 100");
  }
}

function destroyBoxes() {
  refs.divElem.innerHTML = "";
  // const allBoxes = refs.divElem.querySelectorAll('div')
  // allBoxes.remove();
}

refs.btnCreateElem.addEventListener("click", handleBtnCreateElem);
refs.btnDestroyElem.addEventListener("click", destroyBoxes);
