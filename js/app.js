console.log("Fichier JS chargé.");


// Au démarrage de la page, on sélectionne le titre en utilisant son ID
// getElementById permet de récupérer UN ELEMENT d'après son ID.
const mainTitle = document.getElementById('main__title');

// On peut aussi récupérer des éléments d'après leur classe
//getElementsByClassName renvoie TOUJOURS un TABLEAU d'éléments (meme s'il ne trouve rien ou un seul élément)
const menuLinks = document.getElementsByClassName('menu__item');

// On peut aussi récupérer des éléments d'après leur balise
// getElementsByTagName renvoie TOUJOURS un TABLEAU d'éléments (meme s'il n'en trouve qu'un ou aucun)
const h1 = document.getElementsByTagName('h1');

// On peut aussi utiliser des sélecteurs CSS pour sélectionner un élément sur la page.

// Sélectionner le premier élément du menu
// querySelector attend un SELECTEUR CSS en argument et renvoie TOUJOURS UN SEUL ELEMENT, le premier trouvé sur la page
const firstMenuElement = document.querySelector(".submenu .submenu__item:first-child");

// Si on veut récupérer tous les éléments du menu
// querySelectorAll agit comme querySelector sauf qui renvoie TOUJOURS un TABLEAU D'ELEMENTS
const menuElements = document.querySelectorAll(".submenu .submenu__item");



// On peut modifier certaines caractéristiques des éléments
// Par exemple: le contenu de la balise

// mainTitle.textContent = "C'est les vacances !";


// Fonction qui passe du theme dark au thème light et inversement
function changeTheme() {

    // On commence par sélectionner le body
    // On aurait pu utiliser querySelector ou getElementsByTagName, mais JS a déjà prévu un mot clé "body" pour le réprésenter
    const bodyElement = document.body;


    // Pour savoir quel thème afficher, on utilise la boite à outils classList. 
    // L'outil "contains" permet de savoir si un élément possède une classe donnée. Si elle est trouvée, contains renvoie true
    if(bodyElement.classList.contains('theme-dark') == true) {
        // Body possède la classe theme-dark, on veut donc passer au theme clair : on retire la classe.
        bodyElement.classList.remove('theme-dark');
    } else {
        // Body ne possède la classe, on l'ajoute pour passer au thème sombre
        bodyElement.classList.add('theme-dark');

    }

    // On peut aussi utiliser l'outil toggle qui refait la meme condition en une ligne : 
    // bodyElement.classList.toggle('theme-dark');

}


// Fonction qui ajoute dans le DOM toutes les images du slider
function generateSliderImages() {

    // Ce tableau liste toutes les images à afficher dans le slider. Il va servir de source à celui-ci.
    const sliderImages = [
        'ocean.jpg',
        'ski.jpg',
        'city.jpg',
        'apollo.jpg'
    ];

    // On parcourt le tableau des images pour les générer et les insérer dans le DOM.
    for (const currentImage of sliderImages) {
        
        // On crée une nouvelle image avec la fonction createElement. Elle attend le nom d'une balise en argument
        const newImageElement = document.createElement('img');
    
        // On ajoute le chemin vers l'image dans l'attribut src
        newImageElement.src = "img/" + currentImage;
    
        // On ajoute des classes à notre image
        newImageElement.classList.add('slider__img');
    
        newImageElement.alt = "Attribut alt de l'image " + currentImage ;
    
        // On sélectionne le parent
        const sliderElement = document.querySelector('.slider');
    
        // On ajoute le nouvel élément directement en début de la balise parente (avant ses autres enfants)
        sliderElement.prepend(newImageElement);

    }

    // Une fois que toutes les images sont insérées, on veut afficher la première.
    // querySelector renvoie toujours le 1er élément trouvé qui correspond au sélecteur CSS. Donc ici, la première image de notre slider.
    const firstSliderImage = document.querySelector('.slider img');
    

    // On ajoute la classe active à notre image
    firstSliderImage.classList.add('slider__img--current');



}


// Dés le chargement de la page, on génère les images du slider
generateSliderImages();

//BONUS => faire défiler les images du slider
//on cible les boutons précédent et suivant de notre slider.

let buttonCounter = 0; 

const buttonElement = document.querySelectorAll('.slider__btn')

buttonElement.addEventListener('click', handleClickOnSliderButton);

function handleClickOnSliderButton(event){

const arraySliderImage = document.querySelectorAll(".slider__img");

 buttonElement = event.currentTarget;

// on veut faire passer la classe slider__img--current de l'image 1 à la suivante, image +1 au click sur le bouton nextButton
//on veut faire passer la classe slider__img--current de l'image 1 à la précedente, image -1 au click sur le bouton precedentButton

if(buttonElement.aria-label ==="Suivant"){

    buttonCounter++;
}
console.log(buttonCounter);

if(buttonElement.aria-label ==="Précédent"){
    buttonCounter = buttonCounter -1;
}

arraySliderImage[buttonCounter].classList.add("slider__img--current");

    
}





//ATELIER S03 - partie1 : newsletter

// récupérer le bouton "newsletter"
const newsletterButtonElement = document.querySelector ("#newsletterButton") ;


//écouter l'action du bouton "newsletter"
newsletterButtonElement.addEventListener ("click", handleClickOnButton) ;


//créer la fonction : cliquer sur le bouton qui ouvrira le formulaire Newsletter
function handleClickOnButton(event){

    //lorsque nous cliquons sur le bouton "newsletter", nous voulons bloquer l'action= on empêche le rafraichissement de la page
    //sans event.preventDefault, l'évènement disparait 
    event.preventDefault();

    // selectionner la balise aside, qui a la class "newsletter"

    const newClassAside = document.querySelector(".newsletter");

    //ajouter la class "newsletter--on"

    newClassAside.classList.add("newsletter--on");

}


// Etape 1.3 : bouton close

// récupérer le bouton "newsletter__close"
const newsletterButtonElementClose = document.querySelector (".newsletter__close") ;


//écouter l'action du bouton "newsletter__close"
newsletterButtonElementClose.addEventListener ("click", handleClickOnButtonClose) ;


//créer la fonction : cliquer sur le bouton qui ouvrira le formulaire Newsletter
function handleClickOnButtonClose(event){

    //lorsque nous cliquons sur le bouton "newsletter__Close", nous voulons bloquer l'action= on empêche le rafraichissement de la page
    //sans event.preventDefault, l'évènement disparait 
    event.preventDefault();

    // selectionner la balise aside, qui a la class "newsletter"

    const removeClassAside = document.querySelector(".newsletter");

    //ajouter la class "newsletter--on"

    removeClassAside.classList.remove("newsletter--on");

}


//Atelier Saison3 Partie 2 : vérifier les données du formulaire

//Etape 2.1 : l'utilisateur doit pouvoir saisir son adresse e-mail dans le formulaire et nous l'avoir "soumis" (submit)
function init() {
const formElement = document.querySelector('form');
    // On écoute l'événement "submit" sur le formulaire. C'est un événement qui est émis quand on clique sur le bouton de validation du formulaire ou qu'on appuie sur entrée.
    formElement.addEventListener('submit', handleFormSubmit);

}

function handleFormSubmit(eventSubmit){

    eventSubmit.preventDefault();

const inputElement = document.querySelector(".newsletter__field");

const inputValue = inputElement.value;

console.log(inputValue);

//Etape 2.2 : comparer la réponse de l'ulitilisateur avec le tableau 
//intégrer le tableau = dans data.js
//faire le script du data.js dans le html

//créer la balise <p> qui affichera le message d'erreur ou le message de confirmation à la newsletter

for (let domain of forbiddenDomains){
    
    // if inputValue.includes dans la valeur du tableau = true
    //comparer si l'adresse donnée par l'utilisateur = un élément du tableau = true = message d'erreur

    if (inputValue.includes(domain) === true){

        //je veux faire apparaitre <p class ='message'> les adresses jetables ne sont pas admises</p>

        const messageErrorElement = document.createElement ("p") ;

        messageErrorElement.classList.add('message');

        messageErrorElement.textContent = "Les adresses jetables ne sont pas admises" ;

        const asideElement = document.querySelector('.newsletter');

        //fonction append va mettre l'élément messageErrorELement à la fin de l'élément parent Aside
        // si on utilise prepend, l'élement sera en 1er du parent
        asideElement.append(messageErrorElement);

    }
    // le contenu du formulaire = un élément du tableau = false
    else {
        return false
    }


}

// on veut récupérer les données de l'utilisateur
}


// On pose un écouteur sur la page pour lancer notre code seulement quand elle est totalement chargée.
document.addEventListener('DOMContentLoaded', init);















