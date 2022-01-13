const theme = {


    init: function()
    {
        //sélection du bouton qui fera changer le thème
        const themeButton = document.querySelector (".theme-switch") ;

        //écouter ce bouton
        themeButton.addEventListener ("click", theme.handleThemeButtonClick) ;
    
    } ,

    //méthode handler du clic sur le bouto changer de thème
    handleThemeButtonClick : function (evt)
    {
        evt.preventDefault () ;
        
        // On commence par sélectionner la balise sur laquel on va modifier la classe
        const bodyElement = document.querySelector( "body" );
        // On pourrait aussi utiliser document.getElementsByTagName( "body" )
        // Mais comme ell renvoi un tableau, c'est relou

        // On vérifie si l'élement a la classe "theme-dark"
        if( bodyElement.classList.contains( "theme-dark" ) )
        {
            // Si oui, on la retire
            bodyElement.classList.remove( "theme-dark" );
        }
        else
        {
            // Si non, on l'ajoute
            bodyElement.classList.add( "theme-dark" );
        }

        // Bonus : On peut simplifier la condition grace a classList.toggle
        // bodyElement.classList.toggle( "theme-dark" );

        // Super bonus, tout en une seule ligne, sans variable intermédiaire
        // document.querySelector( "body" ).classList.toggle( "theme-dark" );
    } ,
}

// On initialise notre module une fois le DOM complètement chargé
document.addEventListener( "DOMContentLoaded", slider.init );