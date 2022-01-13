// Ici, nous déclarons un objet (un genre de tableau associatif)
// qui va servir a ranger toutes les fonctions (qu'on appelera dans ce cas "méthodes")
const exemple = {

    // Mes propriétés pofpof et pifpif
    pofpof : 2,
    pifpif : 3,
  
    // Ma méthode pafpaf
    pafpaf : function() 
    { 
      console.log( "pafpaf" );
    },
  
    // Une autre propriété pufpuf
    pufpuf : 5
  }
  
  // J'exécute la méthode 'pafpaf' de mon objet 'exemple'
  exemple.pafpaf(); // va faire un console.log
  
  // J'accède la valeur de la propriété 'pofpof' de mon objet 'exemple'
  let test = exemple.pofpof + 5; // 7 -> ( 2 + 5 )