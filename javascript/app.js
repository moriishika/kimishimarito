const images = [
  "assets/Tak berjudul48_20220531143414.png",
  "assets/Tak_berjudul41_20220521085414.jpg",
  "assets/Tak_berjudul7_20220211115832.jpg",
  "assets/Chloe_20220405082729.jpg",
  "assets/Tak_berjudul31_20220415084123.jpg",
  "assets/Tak_berjudul12_20220326114648.jpg",
  "assets/Tak_berjudul30_20220413091438.jpg",
  "assets/download20220400211955.png",
  "assets/Tak_berjudul12_20220313090651.jpg",
];
const galleryContainer = document.querySelectorAll(".gallery-container")[0];

const galleryElement = document.createElement("div");
galleryElement.classList.add("gallery");

const imageElements = [];

for (let i = 0; i < images.length; i++) {
  const imageElement = document.createElement("img");
  imageElement.src = images[i];
  galleryElement.appendChild(imageElement);
  if (galleryElement.childElementCount === 3) {
    const newGalery = galleryElement.cloneNode(true);
    galleryContainer.appendChild(newGalery);
    galleryElement.innerHTML = "";
  } else if (i + 1 === images.length) {
    const newGalery = galleryElement.cloneNode(true);
    galleryContainer.appendChild(newGalery);
  }
}
