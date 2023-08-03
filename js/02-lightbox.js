import { galleryItems } from './gallery-items.js';

/* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li> */

const gallery = document.querySelector(".gallery");

const murkup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("");

gallery.innerHTML = murkup;

const handleImgClick = (evt) => {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return
    };
    
   //  let href = (evt.target.closest('a').getAttribute('href'));
   //  return href;
    
};

gallery.addEventListener('click', handleImgClick);
var lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:250,});

