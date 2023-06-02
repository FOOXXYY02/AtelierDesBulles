/*JS pour le menu burger */
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
/*JS pour le menu burger */
// Sélectionnez l'élément du bandeau
var bandeau = document.getElementById("votre-element-bandeau");

// Ajoutez un écouteur d'événement pour le scroll de la page
window.addEventListener("scroll", function() {
  // Vérifiez la condition avec un if
  if (window.pageYOffset > 0) {
    // Changez la couleur du bandeau en blanc lorsque l'utilisateur a fait défiler la page
    bandeau.style.backgroundColor = "white";
  } else {
    // Rétablissez la couleur d'origine du bandeau lorsque la page est en haut
    bandeau.style.backgroundColor = "couleur-originale";
  }
});
