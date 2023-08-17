import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryListContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(markupItems) {
  return markupItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}

galleryListContainer.insertAdjacentHTML("beforeend", galleryMarkup);

var lightbox = new SimpleLightbox(".gallery a", {});

new SimpleLightbox({ elements: ".imageGallery1 a" });
