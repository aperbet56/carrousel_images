// Récupération des différents éléments
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const allImg = document.querySelectorAll("img");
const indicator = document.querySelector(".carousel__indicator");
const numberSlider = allImg.length;

// Création de la variable index et de la variable count
let index = 0;
let count = 1;

// Affichage dynamique du compteur dès l'arrivée sur la page web
indicator.textContent = `${count} / ${numberSlider}`;

// Déclaration de la fonction nextImage qui va permettre de passer à l'image suivante
const nextImage = () => {
  allImg[index].classList.remove("active");

  if (index < numberSlider - 1) {
    index++;
    count++;
    indicator.textContent = `${count} / ${numberSlider}`;
  } else {
    index = 0;
    count = 1;
    indicator.textContent = `${count} / ${numberSlider}`;
  }
  allImg[index].classList.add("active");
  //console.log(index);
};

// Déclaration de la fonction prevImage qui va permettre de revenir à l'image précédente
const prevImage = () => {
  allImg[index].classList.remove("active");

  if (index > 0) {
    index--;
    count--;
    indicator.textContent = `${count} / ${numberSlider}`;
  } else {
    index = numberSlider - 1;
    count = numberSlider;
    indicator.textContent = `${count} / ${numberSlider}`;
  }

  allImg[index].classList.add("active");
  //console.log(index);
};

// Ecoute des événements "click" sur les boutons et appel des fonctions
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
