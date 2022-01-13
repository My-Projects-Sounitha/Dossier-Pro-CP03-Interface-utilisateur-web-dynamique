
// Module de gestion du theme du site
const theme = {

    // Initilisation
    init : function() 
    {
      // On sélectionne le bouton de changement de theme
      let themeSwitchButtonElement = document.querySelector( "#theme-switch" );
  
      // On place un écouteur d'event sur ce dernier
      themeSwitchButtonElement.addEventListener( "click", theme.handleToggleTheme )
  
      // On charge le thème depuis le localStorage
      theme.loadTheme();
    },
  
    // Méthode de switch de theme
    handleToggleTheme: function( evt )
    {    
     /*
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
        }*/
        
      // On commence par sélectionner la balise sur laquel on va modifier la classe
      const bodyElement = document.querySelector( "body" );
  
      // On ajoute / retire la classe theme-dark dessus
      bodyElement.classList.toggle( "theme-dark" );
  
      // On sauvegarde le thème qu'on vient d'activer
      theme.saveTheme();
    },
  
    // Méthode qui sauvegarde le theme choisi dans le localStorage
    saveTheme: function() 
    {
      // On récupère le body
      const bodyElement = document.querySelector( "body" );
  
      // On vérifie s'il possède la classe theme-dark
      let isDark = bodyElement.classList.contains( "theme-dark" );
  
      // Enfin, on sauvegarde "dark" dans le localStorage si le theme est actif, "light" sinon
      if( isDark )
      {
        localStorage.setItem( 'theme', 'dark' );
      }
      else
      {
        localStorage.setItem( 'theme', 'light' );
      }
    },
  
    // Méthode qui charge le thème choisi depuis le localStorage
    loadTheme: function()
    {
      // On lis le theme sauvegardé dans le localStorage
      const savedTheme = localStorage.getItem( 'theme' );
  
      // En partant du principe qu'on commence en dark-theme
      // On ne modifie en light theme QUE si l'utilisateur a spécifiquement sauvegardé ce dernier
      if( savedTheme === "light" )
      {
        // Ici je peux appeller manuellement mon handleToggleTheme()
        // On est pas obligé de fourni de valeur en argument
        // car il n'est de toute façon pas utilisé dans la méthode
        theme.handleToggleTheme();
      }
    },
    
    
    
    
    
    //-----CHALLENGE E06
      themeChoiceToChoose : function ()
      {
        const themeChangeColorButton = document.querySelectorAll ( ".theme-button" ),
        
        // On place un écouteur d'event sur ce dernier
        for( themeColorElement of themeChangeColorButton )
        {
          themeColorElement.addEventListener( "click", theme.handleThemeColorClick );
        },
      
      },

      handleThemeColorClick: function( evt )
      {  

        themeColor = evt.currentTarget.id ;
        changeColorTheme (themeColor) ;
             
      },

      changeColorTheme : function (themeColor)
      {
        const bodyElement = document.querySelector( "body" );

          if(themeColor === "theme-green") 
          {
                bodyElement.classList.remove( "theme-red" );
                bodyElement.classList.remove( "theme-blue" );
                bodyElement.classList.add( "theme-green" );
            
          }
          else if (themeColor === "theme-red")
          {
            bodyElement.classList.remove( "theme-green" );
            bodyElement.classList.remove( "theme-blue" );
            bodyElement.classList.add( "theme-red" );
          }
          else if (themeColor === "theme-blue")
          {
            bodyElement.classList.remove( "theme-green" );
            bodyElement.classList.remove( "theme-red" );
            bodyElement.classList.add( "theme-blue" );
          }

        },
      }
      
  


  
  // "Démarrage" du module
  document.addEventListener( "DOMContentLoaded", theme.init );
  
  
  // Découpage rapide de la fonctionnalite de sauvegarde du dark theme en localStorage
  
  // Lors du changement de theme, sauvegarder dans le localStorage le theme appliqué
  // "dark" si on active le dark-theme, "light" si on le désactive
  // /!\ gérer le cas de la première visite où localStorage est vide
  
  // A chaque chargement de la page, on va lire dans le localStorage
  // le dernier theme utilisé, et automatiquement activer l'un ou l'autre
  // selon cette valeur.