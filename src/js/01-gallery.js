// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class = "gallery__item">
        <a class="gallery__item" 
        href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>
</div>`
    )
    .join('');
}

const addGalleryMarkup = createGallery(galleryItems);

galleryBox.innerHTML = addGalleryMarkup;

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});
gallery.on('show.simplelightbox');
