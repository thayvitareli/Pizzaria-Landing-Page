const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const allLinks = document.querySelectorAll('.nav-menu a');

menu.addEventListener('click', () => {

    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

//função de rolagem 
function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop; // captura o inicio da secao

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });

    setTimeout(() => {
        if (menu.classList.contains("ativo")) {
            menu.classList.toggle('ativo');
            navMenu.classList.toggle('ativo');
        }
    }, 500)
}

//adicionando o evento para cada link
allLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
});