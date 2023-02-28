/*
    JAVASCRIPT
*/

//array
const imagesArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'   
];

//variabile dove verranno inserite le immagini del carousel
const imageListDom = document.querySelector('.image-list'); 

let sliderContent = "";

//ciclo per aggiungere un div per ogni immagine contenuta nell'array
for (let i = 0; i < imagesArray.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imagesArray[i]}" />
                             </div>`;

    
    sliderContent += newImageWrapper;
}
//trasferisco la lista di tutti i div prodotti nel container nell'html
imageListDom.innerHTML = sliderContent;
console.log(imageListDom);

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');

//assegno il valore 0 per indicare la prima immagine della lista
let activeImage = 0;

//rendo solo la prima immagine della lista visibile
imagesWrapperDom[activeImage].classList.add('show');

