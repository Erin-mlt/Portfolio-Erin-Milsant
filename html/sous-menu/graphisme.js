const projets = document.querySelectorAll(".conteneur-projets-graphisme > div"); 
const detail = document.getElementById("detail");
const detailImagesContainer = document.getElementById("detail-images");
const detailTitle = document.getElementById("detail-title");
const detailSubtitle = document.getElementById("detail-subtitle");
const detailDesc = document.getElementById("detail-desc");
const closeBtn = document.getElementById("close");

projets.forEach(projet => {
  const imgs = projet.querySelectorAll("img");
  if (imgs.length === 0) return; // si aucune image, on skip

  imgs[0].addEventListener("click", () => {
    detailImagesContainer.innerHTML = ""; // vider le conteneur

    // ajouter toutes les images de la carte, même celles en display:none
    imgs.forEach(img => {
      const clone = document.createElement("img");
      clone.src = img.src;
      clone.alt = img.alt;
      detailImagesContainer.appendChild(clone);
    });

    // remplir le texte depuis la première image
    const mainImg = imgs[0];
    detailTitle.textContent = mainImg.dataset.title || "";
    detailSubtitle.textContent = mainImg.dataset.subtitle || "";
    detailDesc.textContent = mainImg.dataset.desc || "";

    // afficher le modal
    detail.classList.remove("hidden");
    document.body.style.overflow = "hidden"; 
  });
});

// fermeture
closeBtn.addEventListener("click", () => {
  detail.classList.add("hidden");
  detailImagesContainer.innerHTML = "";
  document.body.style.overflow = "";
});
