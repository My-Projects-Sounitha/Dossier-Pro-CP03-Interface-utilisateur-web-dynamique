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




