function changeMode() {
    changeButton();
    changeText();
}

function changeButton() {
    button.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
}

function changeText() {
    const darkMode = 'Dark Mode';
    const lightMode = 'Light Mode';

    if (body.classList.contains('dark-mode')) {
        h1.innerHTML = darkMode + " ON";
        button.innerHTML = lightMode;
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)
