const inputEl = document.createElement('input');
const firstEl = document.getElementsByClassName("ul") [0];
const button = document.createElement('Button');
const ulEl = document.getElementsByClassName('ul') [0];

button.innerText = 'Add '
button.addEventListener('click', Click)

firstEl.append(inputEl);

firstEl.prepend(button);
ulEl.prepend(inputEl)


button.addEventListener('click', Click)

let i = 1;

function Click () {
    const liEl = document.createElement('li');
    const userText = i++ + ' ' + inputEl.value;
    liEl.innerText = userText; 
    ulEl.appendChild(liEl);
}

