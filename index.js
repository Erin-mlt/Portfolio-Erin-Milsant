// let bienvenue='Bienvenue dans mon Portfolio';

// alert(bienvenue)

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// ... quand il faut choisir une couleur
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00
// let admin, name;
// name = 'John';
// admin = name;
// alert(admin)
const burger = document.querySelector('.burger');
  const menu = document.querySelector('.conteneur-menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  

document.addEventListener("DOMContentLoaded", () => {
  // On sélectionne tous les paragraphes de plusieurs sections
  const paragraphs = document.querySelectorAll(
    ".text-gestion-crea p, .titre-gestion-crea p"
  );

  // Création de l'observateur
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // fait apparaître le paragraphe
        observer.unobserve(entry.target);   // stop l'observation pour éviter répétition
      }
    });
  }, { threshold: 0.1 }); // déclenche quand 80% de l’élément est visible

  // On observe chaque paragraphe trouvé
  paragraphs.forEach(p => observer.observe(p));
});
