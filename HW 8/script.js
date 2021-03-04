
const inputEl = document.querySelector('input');
const typeEl = document.querySelector('.type');
const figureEl = document.querySelector('.figure');

inputEl.addEventListener('change', onColorChange);
typeEl.addEventListener('change', onTypeChange);

function onTypeChange() {
    figureEl.classList.remove('circle', 'rectangle', 'squire');
    figureEl.classList.add(typeEl.value);
};

function onColorChange() {
    figureEl.style.background = inputEl.value;
};