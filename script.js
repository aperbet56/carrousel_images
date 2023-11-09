// Récupération des différents éléments
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const allImg = document.querySelectorAll("img");
const numberSlider = allImg.length;

// Création de la variable index
let index = 0;

// Déclaration de la fonction nextImage qui va permettre de passer à l'image suivante
const nextImage = () => {
  allImg[index].classList.remove("active");

  if (index < numberSlider - 1) {
    index++;
  } else {
    index = 0;
  }

  allImg[index].classList.add("active");
  console.log(index);
};

// Déclaration de la fonction prevImage qui va permettre de revenir à l'image précédente
const prevImage = () => {
  allImg[index].classList.remove("active");

  if (index > 0) {
    index--;
  } else {
    index = numberSlider - 1;
  }

  allImg[index].classList.add("active");
  console.log(index);
};

// Ecoute des événements "click" sur les boutons et appel des fonctions
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
