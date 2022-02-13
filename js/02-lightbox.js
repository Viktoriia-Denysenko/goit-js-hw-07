import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const makeGalleryItem = item => {
  return `
  <li>
  <a href="${item.original}" class="gallery__item" >
  <img class="gallery__image" src="${item.preview}" alt="${item.description}"
  />
  </a>
  </li>`;
};

const makeGallery = galleryItems.map(makeGalleryItem).join('');

galleryRef.insertAdjacentHTML('afterbegin', makeGallery);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
