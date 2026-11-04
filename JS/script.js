// MENU
// Abre el menu
function openMenu() {
  console.log("Función openMenu");
  document.getElementById("menu").style.transform ="translateX(0)";
  document.getElementById("menu").style.backgroundColor ="white";
}
// CERRAR menu
function closeMenu() {
  console.log("Función closeMenu");
  document.getElementById("menu").style.transform ="translateX(calc(-100% + 4rem))";
  document.getElementById("menu").style.backgroundColor ="transparent";
}