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
const imageSequence = document.querySelector('.image-sequence'); 

let sliderContent = "";
let sequenceContent = "";

//ciclo per aggiungere un div per ogni immagine contenuta nell'array
for (let i = 0; i < imagesArray.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imagesArray[i]}" />
                             </div>`;
    
    sliderContent += newImageWrapper;

    const newImageSequence =    `<div class="box">
                                    <img class="image" src="${imagesArray[i]}" alt="Prima immagine">
                                </div>`

    sequenceContent += newImageSequence;
}
//trasferisco la lista di tutti i div prodotti nel container nell'html
imageListDom.innerHTML = sliderContent;
console.log(imageListDom);

imageSequence.innerHTML = sequenceContent;
console.log(imageSequence);

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const imageSequenceDom = document.getElementsByClassName('box');

//assegno il valore 0 per indicare la prima immagine della lista
let activeImage = 0;

//rendo solo la prima immagine della lista visibile
imagesWrapperDom[activeImage].classList.add('show');

