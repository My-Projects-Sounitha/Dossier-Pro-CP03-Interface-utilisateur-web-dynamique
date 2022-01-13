// L'objet localStorage est global, il est toujours disponible
// Pour y enregistrer une valeur, on utilise :
localStorage.setItem( "ma_cle", "ma_valeur" );

// Pour récupérer cette valeur :
let pofpof = localStorage.getItem( "ma_cle" );
console.log( pofpof ); // "ma_valeur"


// Attention, le localStorage ne stocke QUE des string
localStorage.setItem( "mon_nombre", 1337 );

let pifpif = localStorage.getItem( "mon_nombre" );
console.log( pifpif ); // "1337" en String !

localStorage.setItem( "mon_bool", true );
console.log( localStorage.getItem( "mon_bool" ) );


// La solution JSON pour tout stocker en String

// Le JSON (JavaScript Object Notation) est un format de données textuelles,
// Il est dérive de la notation du JS pour les objets
// Comme c'est du "texte", on peut le stocker dans le localStorage

let trucASauvegarder = [
  'ocean.jpg',
  'ski.jpg',
  'city.jpg'
];
console.log( trucASauvegarder );

// "Traduction" de l'objet en chaine de caractère
// SANS perdre d'information
let representationEnStringDeMonTrucASauvegarder = JSON.stringify( trucASauvegarder );
console.log( representationEnStringDeMonTrucASauvegarder );

// Maintenant que c'est une chaine je peux la stocker dans le localStorage
localStorage.setItem( "mon_objet_en_json", representationEnStringDeMonTrucASauvegarder );

// Imaginons maintenant, plus loin dans le code, ou dans le temps, que j'ai besoin
// de récupérer cette information que j'ai stocké
let maDataEnString = localStorage.getItem( "mon_objet_en_json" );
console.log( maDataEnString );

// Ensuite, je la re-transforme en objet (ou en quoi qu'elle fut à l'origine)
let maDataEnObjet = JSON.parse( maDataEnString );
console.log( maDataEnObjet );