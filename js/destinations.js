// Module de gestion de la partie "Destinations" du site
const destinations = {

    // On va stocker le message d'erreur affiché lors du clic sur "favoris"
    notLoggedInUserMessage : "Vous devez être connecté pour gérer vos favoris",
  
    // Fonction d'initialisation du module
    // En général on s'en sert pour ajouter les event listeners
    // On l'appelle au "chargement" du module
    init: function()
    {
      // Récupérer l'ensemble des boutons "like" du site (dans la partie destinations)
      const heartButtons = document.querySelectorAll( ".btn__like" );

      //on ne peut pas faire heartButtn.addEvent... car heartButton = est un tableau (querySelectorAll)
        //donc on fait une boucle
      // Ajouter l'event listener sur chacun d'eux
      for( heartButtonElement of heartButtons )
      {
        heartButtonElement.addEventListener( "click", destinations.handleHeartButtonClick );
      }
    },
  
    // Méthode handler du clic sur le bouton favoris
    handleHeartButtonClick: function( evt )
    {
      // On arrive ici sans forcément savoir quel bouton a été cliqué !
      // Heureusement on a cette info dans le détail de l'event !
      // SAUF QUE, le bouton n'est pas l'élément sur lequel je souhaite ajouter mon erreur
      // Je veux l'ajouter sur l'article avec la classe .card qui contient ce bouton
      // https://developer.mozilla.org/fr/docs/Web/API/Element/closest
      //evt.currentTarget = on cible l'élément (la classe ou la balise) qui préciser la variable
      let clickedButtonCardParentElement = evt.target.closest( ".card" );
      // console.log( clickedButtonCardParentElement );
  
      // On affiche le message dans cet élément
      messages.addMessageToElement( destinations.notLoggedInUserMessage, clickedButtonCardParentElement );
    }
  };
  
  // Une fois notre modèle "chargé" on peut déclencher son initialisation
  // destinations.init();
  
  // Meilleure solution : 
  // Pour s'assurer qu'on init le module après le chargement COMPLET du DOM
  // On le déclenche en réponse à l'event DOMContentLoaded qui survient sur document
  document.addEventListener( "DOMContentLoaded", destinations.init );
  
  