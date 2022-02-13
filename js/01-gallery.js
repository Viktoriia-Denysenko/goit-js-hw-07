import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onGalleryPictureClick);

function onGalleryPictureClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
  //     <img src="${event.target.dataset.source}" width="800" height="600">
  // `);

  instance.show();

  window.addEventListener('keydown', onEscKeyPress);

  function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    instance.close();
  }

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  }
}

const makeGalleryItem = item => {
  return `
  <div class="gallery__item">
  <a href="${item.original}" class="gallery__link" >
  <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"
  />
  </a>
  </div>`;
};

const makeGallery = galleryItems.map(makeGalleryItem).join('');

galleryRef.insertAdjacentHTML('afterbegin', makeGallery);
