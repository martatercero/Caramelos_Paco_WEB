// AOS
AOS.init();

// TYPED
let typedStarted = false;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting && !typedStarted) {

            typedStarted = true;

            new Typed('#element', {
                strings: ['Más de 90 años haciendo la vida un poco más dulce. Descubre los sabores, caramelos y especialidades que han conquistado generaciones.'],
                typeSpeed: 40,
            });

            observer.disconnect();
        }
    });
}, {
    threshold: 0.4
});

observer.observe(document.getElementById('historia'));



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



// FILTRO PRODUCTOS
const filtros = document.querySelectorAll(".filtro-producto");
const cards = document.querySelectorAll(".producto-card");

filtros.forEach(filtro => {
    filtro.addEventListener("click", (e) => {

        e.preventDefault();

        const categoria = filtro.dataset.category;

        filtros.forEach(btn => {
            btn.classList.remove("bg-principal");
        });

        filtro.classList.add("bg-principal");

        cards.forEach(card => {
            if (
                categoria === "all" ||
                card.dataset.category === categoria
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

    });
});




// CLARO/OSCURO
function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
}

// DARKMODE - Cambiar ciertos elementos de color
const btnModoClaro = document.getElementById("modo-oscuro");
const iconoModoClaro = document.getElementById("modo-claro-icono");
const iconoModoOscuro = document.querySelectorAll(".modo-oscuro-icono");
const seccionProductos = document.getElementById("productos");
const seccionNewsletter = document.getElementById("newsletter");
const botonNewsletter = seccionNewsletter.querySelector('input[type="submit"]');

// Colores css en varibales
const colorPrincipal = getComputedStyle(document.documentElement).getPropertyValue('--color-principal');
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

        // NEWSLETTER
        seccionNewsletter.style.backgroundColor = colorPrincipal;
        
        const hoverInNewsletter = () => {
            botonNewsletter.style.backgroundColor = colorBgClaro;
            botonNewsletter.style.color = "#FFFFFF";
        };
        const hoverOutNewsletter = () => {
            botonNewsletter.style.backgroundColor = "#FFFFFF";
            botonNewsletter.style.color = colorNegro;
        };

        botonNewsletter.style.backgroundColor = "#FFFFFF";
        botonNewsletter.style.color = colorNegro;
        botonNewsletter.addEventListener("mouseenter", hoverInNewsletter);
        botonNewsletter.addEventListener("mouseleave", hoverOutNewsletter);


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
        seccionNewsletter.style.backgroundColor = "";
        // Hover
        botonNewsletter.removeEventListener("mouseenter", hoverInNewsletter);
        botonNewsletter.removeEventListener("mouseleave", hoverOutNewsletter);

        botonNewsletter.style.backgroundColor = "";
        botonNewsletter.style.color = "";

    }
});



// JQuery - intento
// $(window).on("scroll", function () {

//     if ($(window).scrollTop() > 50) {
//         $(".blur-header").css({
//             "background-color": "rgba(179, 35, 37, 0.8)",
//             "backdrop-filter": "blur(10px)",
//             "-webkit-backdrop-filter": "blur(10px)"
//         });

//     } else {
//         $(".blur-header").css({
//             "background-color": "var(--color-principal)",
//             "backdrop-filter": "none",
//             "-webkit-backdrop-filter": "none"
//         });
//     }
// });