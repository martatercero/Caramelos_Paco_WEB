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

// DARKMODE - Cambiar ciertos elementos de color
const btnModoClaro = document.getElementById("modo-oscuro");
const iconoModoClaro = document.getElementById("modo-claro-icono");
const iconoModoOscuro = document.querySelectorAll(".modo-oscuro-icono");
const seccionProductos = document.getElementById("productos");
// Colores css en varibales
const colorNegro = getComputedStyle(document.documentElement).getPropertyValue('--color-oscuro');
const colorBgClaro = getComputedStyle(document.documentElement).getPropertyValue('--color-rosa-claro');
const colorBgOscuro = getComputedStyle(document.documentElement).getPropertyValue('--color-hover');


let modoClaroActivo = false;

btnModoClaro.addEventListener("click", () => {

    modoClaroActivo = !modoClaroActivo;

    if (modoClaroActivo) {
        iconoModoClaro.src = "MULTIMEDIA/IMG/iconos/modo-claro.svg";

        // Cambiar colores iconos - Modo Dark
        iconoModoOscuro.forEach(icono => {
            icono.style.filter ="brightness(0) saturate(100%) invert(75%) sepia(23%) saturate(529%) hue-rotate(309deg) brightness(105%) contrast(100%)";
        });

        // TARJETAS
        // Parte superior de las tarjetas
        seccionProductos.querySelectorAll("article").forEach(card => {
            card.style.backgroundColor = colorBgOscuro;
        });

        // Parte inferior de las tarjetas
        seccionProductos.querySelectorAll("article > div:last-child").forEach(franja => {
            franja.style.backgroundColor = colorBgClaro;
            franja.style.color = colorNegro;
        });
        seccionProductos.querySelectorAll("article > div:last-child > a").forEach(btn => {
            btn.style.backgroundColor = colorBgOscuro;
        });

    } else {

        // Volver al icono original
        iconoModoClaro.src = "MULTIMEDIA/IMG/iconos/modo-oscuro.svg";
        iconoModoOscuro.forEach(icono => {
            icono.style.filter = "none";
        });

        // Restaurar estilos originales
        seccionProductos.style.color = "";
        seccionProductos.querySelectorAll("*").forEach(el => {
            el.style.backgroundColor = "";
            el.style.color = "";
        });
    }
});


// JQuery
$(".filtro").click(function () {

    let categoria = $(this).data("categoria");

    $(".producto").hide();

    $('.producto[data-categoria="' + categoria + '"]')
        .fadeIn();

});