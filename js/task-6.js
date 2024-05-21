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
  for (let i = 0; i < amount; i++) {
    // refs.divElem.innerHTML = '' 
    const color = getRandomHexColor();
    const boxTemplate = document.createElement('div');
    boxTemplate.style.width = `${i * 10 + 30}px`;
    boxTemplate.style.height = `${i * 10 + 30}px`;
    boxTemplate.style.backgroundColor = `${color}`;
    // arr.push(boxTemplate);
    
    refs.divElem.append(boxTemplate);
  }
  // console.log(arr);
}

function handleBtnCreateElem() {
  refs.divElem.innerHTML = ''
  const inputValue = Number(refs.inputElem.value);
  if (inputValue >= 1  && inputValue <= 100) {
    createBoxes(inputValue);
    refs.inputElem.value = '';
  
    // refs.divElem.insertAdjacentHTML('beforeend', markup);
    // refs.divElem.innerHTML = markup;
    }
}
  
function destroyBoxes() {
  refs.divElem.innerHTML = '';
  // const allBoxes = refs.divElem.querySelectorAll('div')
  // allBoxes.remove();
}

refs.btnCreateElem.addEventListener('click', handleBtnCreateElem);
refs.btnDestroyElem.addEventListener('click', destroyBoxes);