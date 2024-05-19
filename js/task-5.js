function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  bodyEl: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
}
// console.log(refs.bodyEl);
// console.log(refs.spanEl);
// console.log(refs.btnEl);

function handleBtnElClick(event) {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.spanEl.textContent = `${color}`;
};

refs.btnEl.addEventListener('click', handleBtnElClick);
