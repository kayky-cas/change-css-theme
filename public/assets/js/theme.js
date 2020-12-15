const botao = document.querySelector('#changeButton');
const body = document.body;


botao.onclick = () => {
    if (botao.innerHTML == 'Dark') {
        botao.classList.replace('dark', 'light');

        botao.innerHTML = 'Light';

        body.classList.replace('light', 'dark');
    }

    else {
        body.classList.replace('dark', 'light');

        botao.innerHTML = 'Dark';

        botao.classList.replace('light', 'dark');
    }
};