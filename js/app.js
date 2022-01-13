//================= 
// Atelier - ETAPE 1
//================= 

// Etape 1.1
// J'ai ajouté l'id newsletter-button au bouton de la newsletter du menu
// dans le html pour faciliter son ciblage ;)

let newsletterToggleButtonElement = document.querySelector( "#newsletter-button" );
// console.log( newsletterToggleButtonElement );

// Etape 1.3
// Je récupère la petite croix 
let newsletterCloseButtonElement = document.querySelector( ".newsletter__close" );
// console.log( newsletterCloseButtonElement );

// On créé notre handler (qu'on va réutiliser pour l'étape 1.3)
const handleClickNewsletterButton = function( evt )
{
  // On empêche le navigateur de charger la page indiquée par le lien
  // En gros, ici, on empêche le rechargement au clic sur le <a>
  evt.preventDefault();
  // console.log( "Bouton newsletter cliqué !" );

  // Etape 1.2
  // Sélectionner l'encart newsletter (ici via sa classe)
  let newsletterElement = document.querySelector( ".newsletter" );
  // console.log( newsletterElement );

  // On active ou désactive la présence de la classe sur l'élement
  // en fonction de son "état" actuel
  newsletterElement.classList.toggle( "newsletter--on" );
}

// On ajoute l'écouteur d'event
newsletterToggleButtonElement.addEventListener( "click", handleClickNewsletterButton );

// Etape 1.3 : On ajoute l'écouteur sur le bouton close
newsletterCloseButtonElement.addEventListener( "click", handleClickNewsletterButton );

//-------------
// Atelier - ETAPE 2
//-------------

// Je sélectionne l'élement de formulaire
let newsletterFormElement = document.querySelector( ".newsletter > form" );

// Je prépare ma fonction de vérification des emails jetables
const isForbiddenEmail = function( inputEmail )
{
  const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
  ];

  // On parcours la liste des domaines interdits
  for( let domain of forbiddenDomains )
  {
    // Vérifier si domain est contenu dans inputEmail
    // Pour ça, j'utilise .includes sur la chaine de l'email
    if( inputEmail.includes( domain ) )
    {
      // Dés qu'un domaine interdit est détecté, on s'arrête et on renvoi true
      // /!\ true ici indique que le domain est interdit 
      return true;
    }
  }

  // Si on a parcouru tout le tableau sans trouver de domaine interdit
  // C'est que l'adresse email est valide, on retourne donc false
  return false;
}

// Je prépare mon handler
const handleNewsletterFormSubmit = function( evt )
{
  // On empêche le rechargement de la page a la soumission du formulaire
  evt.preventDefault();

  // Une fois le formulaire soumis, on récupère l'entrée de l'utilisateur
  // Pour ça, on doit cibler le champ input correspondant (ici avec l'ID)
  let newsletterInputElement = document.querySelector( "#subscriber-email" );
  
  // Ensuite, je peux récupérer ce qui a été entré par l'user dans un champ input grace
  // à la variable .value disponible sur l'élement
  let userInputEmail = newsletterInputElement.value;
  // console.log( userInputEmail );

  // Vérifier si l'adresse mail est jetable
  let isForbidden = isForbiddenEmail( userInputEmail );

  // Tester la valeur de retour de la fonction qui teste l'email
  if( isForbidden )
  {
    // On récupère où veut afficher le message
    let newsletterElement = document.querySelector( ".newsletter" );
    
    // On appelle la méthode addMessageToElement pour faire l'ajout de notre erreur
    messages.addMessageToElement( "Les adresses jetables ne sont pas admises", newsletterElement );
  }  
  // Bonus : gérer le cas du else, si l'adresse est bonne
  //  - On pourrait ajouter un message en vert de validation
  else
  {
    // On récupère où veut afficher le message
    let newsletterElement = document.querySelector( ".newsletter" );

    // On appelle notre nouvelle méthode qui affiche un message de succès
    messages.addSuccessMessageToElement( "Merci pour votre inscription !", newsletterElement );
  }

  // Bonus
  //  - Une fois le formulaire soumis, adresse valide ou non, on peut "vider" le champ input
  newsletterInputElement.value = "";
}

// J'ajoute mon listener
newsletterFormElement.addEventListener( "submit", handleNewsletterFormSubmit );

