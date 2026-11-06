// AOS
AOS.init();

// TYPED
var typed = new Typed('#element', {
    strings: ['Más de 90 años haciendo la vida un poco más dulce. Descubre los sabores, caramelos y especialidades que han conquistado generaciones.'],
    typeSpeed: 40,
});

// MENU
const menu = document.getElementById("menu");
const botonMenu = document.getElementById("boton-menu");
// ABRIR MENU
function openMenu() {
    menu.classList.remove("-translate-x-full");
    menu.classList.add("translate-x-0");
    botonMenu.setAttribute("aria-expanded", "true");
    botonMenu.setAttribute("aria-label", "Cerrar menú");
    console.log("Menú abierto");
}
// CERRAR MENU
function closeMenu() {
    menu.classList.remove("translate-x-0");
    menu.classList.add("-translate-x-full");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
    console.log("Menú cerrado");
}


// CLARO/OSCURO
function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
}


// JQuery
$(".filtro").click(function () {

    let categoria = $(this).data("categoria");

    $(".producto").hide();

    $('.producto[data-categoria="' + categoria + '"]')
        .fadeIn();

});