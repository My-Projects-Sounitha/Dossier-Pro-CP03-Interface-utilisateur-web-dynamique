const slider = {

  // Propriété qui contient un tableau indexé des images du slider
  sliderImages : [
    'ocean.jpg',
    'ski.jpg',
    'city.jpg'
  ],

  // On stocke dans une propriété du module, l'index de l'image actuellement affichée
  currentImageIndex : 0,

  // Initialisation du module
  init : function()
  {
    // Ajouter les <img> dans la <section> .slider
    slider.createImages();

    // On ajoute les event listeners sur les bouton previous/next
    slider.addEvents();
  },
  
  // Méthode qui ajoute les <img> dans la <section> .slider
  createImages : function()
  {
    // Récupérer la section.slider
    const sliderElement = document.querySelector( ".slider" );

    for( const currentImage of slider.sliderImages )
    {
      // On va utiliser le DOM pour créer "en script" un élément de toute pièce
      // L'élement n'est pour l'instant "nulle part" sur notre page
      const newImageElement = document.createElement( "img" );
    
      // On modifie son attribut src
      newImageElement.src = "img/" + currentImage;
    
      // On ajoute les classes demandées par l'énoncé
      newImageElement.classList.add( "slider__img" );
      // En deux lignes c'est pareil ;)
      // newImageElement.classList.add( "slider__img" );
      // newImageElement.classList.add( "slider__img--current" );
    
      // On modifie l'attribut alt
      newImageElement.alt = "Image du slider";
    
      // Il nous reste a ajouter notre image a notre page
      sliderElement.append( newImageElement );
    }

    // Une fois la boucle terminée, on sélectionne la première image du slider
    const firstSliderImageElement = document.querySelector( ".slider > img:first-of-type" );
    // https://developer.mozilla.org/fr/docs/Web/CSS/:first-of-type

    // Maintenant qu'on a l'image demandée, on lui ajoute la classe "slider__img--current"
    firstSliderImageElement.classList.add( "slider__img--current" );
  },

  // Méthode qui va ajouter les écouteurs d'événement aux boutons
  addEvents : function()
  {
    // On récupère les deux boutons dans un tableau d'éléments
    let sliderButtons = document.querySelectorAll( ".slider__btn" );

    // On place un écouteur sur le premier bouton (précédent)
    let previousSliderButtonElement = sliderButtons[0];
    previousSliderButtonElement.addEventListener( "click", slider.handlePreviousSlideClick );

    // On place un écouteur sur le deuxieme bouton (suivant)
    let nextSliderButtonElement = sliderButtons[1];
    nextSliderButtonElement.addEventListener( "click", slider.handleNextSlideClick );
  },

  // Handler du clic sur "slide précédente"
  handlePreviousSlideClick : function( evt ) 
  {
    // On décrémente le compteur pour trouver le numéro de la nouvelle image
    let newImageIndex = slider.currentImageIndex - 1;

    // Si la nouvelle position est inférieur a 0,
    // on doit revenir à la dernière image, on ne va pas afficher l'image -1
    if( newImageIndex < 0 )
    {
      // On se met sur la dernière image
      // La dernière image est à l'index taille_du_tableau moins 1 (vu qu'il commence a 0)
      newImageIndex = slider.sliderImages.length - 1;
    }

    // Maintenant que je connais l'index de la nouvelle image
    // J'appelle la fonction qui va faire le changement dans le DOM
    // Elle a besoin de l'index de l'image a faire apparaitre
    slider.goToSlide( newImageIndex );
  }, 

  // Handler du clic sur "slide suivante"
  handleNextSlideClick : function( evt ) 
  {
    // On décrémente le compteur pour trouver le numéro de la nouvelle image
    let newImageIndex = slider.currentImageIndex + 1;

    // Si la nouvelle position est supérieur a la taille du tableau -1,
    // on doit revenir à la première image
    if( newImageIndex > slider.sliderImages.length - 1 )
    {
      // On se met sur la première image
      newImageIndex = 0;
    }

    // J'appelle la fonction qui va faire le changement dans le DOM
    slider.goToSlide( newImageIndex );
  }, 

  // Méthode qui modifie effectivement le DOM pour 
  // changer l'image affichée en fonction de l'index fourni
  goToSlide : function( newImageIndex )
  {
    // On vérifie si le nouvel index d'image existe
    // Ici on s'assure que newImageIndex est entre [0, 2]
    if( newImageIndex >= 0 && newImageIndex < slider.sliderImages.length )
    {
      // On récupère l'image affichée
      const currentSliderImageElement = document.querySelector( ".slider__img--current" );

      // Ensuite, on lui retire la classe "image actuellement affichée"
      currentSliderImageElement.classList.remove( "slider__img--current" );

      // On récupère la "prochaine" image à afficher
      const newSliderImages = document.querySelectorAll( ".slider__img" );

      // Comme mes images ont été ajoutées dans l'ordre, les index de mon tableau newSliderImages
      // sont dans le même ordre que mon tableay slider.sliderImages
      // Donc grace à l'index, je peux facilement trouver l'élement de la prochaine image a afficher
      const newSliderImageElement = newSliderImages[ newImageIndex ];

      // Une fois la nouvelle image trouvée, on lui ajoute la classe current
      newSliderImageElement.classList.add( "slider__img--current" );

      // Il ne faut pas pas oublier de "sauvegarder" la modification de l'index de l'image affichée
      slider.currentImageIndex = newImageIndex;
    }
    else
    {
      console.error( "La slide à afficher n'existe pas !" );
    }
  }
}

// On initialise notre module une fois le DOM complètement chargé
document.addEventListener( "DOMContentLoaded", slider.init );

