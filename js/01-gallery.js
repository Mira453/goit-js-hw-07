import { galleryItems } from './gallery-items.js';


/* <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div> */

const gallery = document.querySelector(".gallery");

const createGallery = galleryItems.map(({ original, preview, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`).join("");

gallery.innerHTML = createGallery;


const handleImgClick = (evt) => {
    evt.preventDefault();
    const img = evt.target;

    if (!img.classList.contains('gallery__image')) {
      return
    };


    const instance = basicLightbox.create(`
            <img src="${img.dataset.source}" alt="${img.alt}">
    `);
    instance.show();
    
};

gallery.addEventListener('click', handleImgClick);

