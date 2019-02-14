// const quadrado = document.querySelector('.quadrado');
// const imgFaustao = document.querySelector('img')

// console.log(quadrado)
// const mostrarQuadrado = function () {
//     quadrado.classList.toggle('visivel');
// }

// const destaqueImagem = function () {
//     imgFaustao.classList.toggle('destaque');
// }

// quadrado.onmouseover = mostrarQuadrado;
// quadrado.onmouseout = mostrarQuadrado;

// imgFaustao.onmouseover = destaqueImagem;
// imgFaustao.onmouseout = destaqueImagem;

const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMenuHamburguer = document.querySelector('.nav-menu-hamburguer');

const atualizarMenu = function () {
    navMenuHamburguer.classList.toggle('ativo');
    navMenuHamburguer.classList.toggle('visivel');

}

menuHamburguer.onclick = atualizarMenu;
