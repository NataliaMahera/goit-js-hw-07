import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}

galleryListContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryListContainer.addEventListener("click", onGalleryListContainerClick);

function onGalleryListContainerClick(evt) {
  evt.preventDefault();
  const largeImgUrl = evt.target.dataset.source;
  if (!largeImgUrl) {
    return;
  }
  const instance = basicLightbox.create(`
  <img
  class="gallery__image"
  src="${largeImgUrl}"
/>
`);
  instance.show();

  document.addEventListener("keydown", onEscKeyPress);
  function onEscKeyPress(evt) {
    const ESC = "Escape";
    if (evt.code === ESC) {
      instance.close();
    }
  }
}
