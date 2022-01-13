// Ici, nous déclarons un objet messages (qu'on utilise comme module)
// qui va servir a ranger toutes les fonctions
const messages = {

  // Méthode qui permet d'ajouter un nouveau message d'erreur
  addMessageToElement: function( messageContent, parentElement ) 
  {
    // Avant d'afficher un nouveau message, on retire tout les anciens
    messages.removeOldMessages();

    // On créé une balise <p> pour y mettre un message d'erreur
    let newErrorElement = document.createElement( "p" );

    // On lui ajoute la classe 'message'
    newErrorElement.classList.add( "message" );

    // On indique le message d'erreur à l'intérieur
    newErrorElement.textContent = messageContent;

    // Maintenant que le message est prêt, il reste à l'ajouter au aside pour l'afficher
    parentElement.prepend( newErrorElement );

    // BONUS : Au cas où on ait besoin de réutiliser ce message généré, on le return
    // Ca nous permet d'économiser une recherche avec querySelector
    return newErrorElement;
  },

  // Méthode qui permet d'ajouter un message réussite à un élement
  addSuccessMessageToElement: function( messageContent, parentElement )
  {
    // On réutilise la méthode précédente, car un message d'erreur ou de succès, ça s'ajoute pareil
    let errorMessageElement = messages.addMessageToElement( messageContent, parentElement );

    // Maintenant que j'ai accès au message "d'erreur" ainsi créé, je peux modifier son apparence
    // element.style est une boite a outils (un peu comme classList) qui nous permet de modifier
    // l'attribut "style" d'une balise pour y mettre le CSS de notre choix
    errorMessageElement.style.color = "green";

    // Je peux changer les propriétés CSS que je veux sur l'élement !
    errorMessageElement.style.backgroundColor = "rgb(165, 255, 103)";
  },

  // Méthode qui permet d'effacer tout les messages d'erreur
  removeOldMessages : function() 
  {
    // Récupérer grace au DOM tout les messages d'erreur actuellement sur la page
    let oldMessages = document.querySelectorAll( "p.message" );

    // On parcourste notre tableau avec une boucle
    for( let oldMessageElement of oldMessages )
    {
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
      oldMessageElement.remove();
    }
  }
}