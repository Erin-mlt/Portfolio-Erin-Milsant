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

