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

//variabile pulsante avanti
const nextDom = document.querySelector('#next');
//variabile pulsante indietro
const prevDom = document.querySelector('#prev');

//evento per il click del pulsante avanti
nextDom.addEventListener('click',
    function() {
        if (activeImage < imagesWrapperDom.length - 1) {
            //rimuovo l'immagine corrente
            imagesWrapperDom[activeImage].classList.remove('show');
            //assegno un valore in piu all'immagine attuale per cambiarla con l'immagine successiva
            activeImage++;
            //mostro l'immagine successiva
            imagesWrapperDom[activeImage].classList.add('show');

            prevDom.classList.remove('hide');

            if (activeImage == imagesWrapperDom.length - 1) {
                nextDom.classList.add('hide');
            } 
        }    
    }
);

//evento per il click del pulsante indietro
prevDom.addEventListener('click',
    function() {
        if (activeImage > 0) {
            //rimuovo l'immagine corrente
            imagesWrapperDom[activeImage].classList.remove('show');
            //assegno un valore in meno all'immagine attuale per cambiarla con l'immagine precedente
            activeImage--;
            //mostro l'immagine precedente
            imagesWrapperDom[activeImage].classList.add('show');

            nextDom.classList.remove('hide');

            if (activeImage == 0) {
                prevDom.classList.add('hide');
            } 
        }
    }
);