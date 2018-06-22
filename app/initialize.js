$(document).ready(function(){

// Apparition du button return top
  window.onscroll = function(ev) {
    console.log(ev);
    document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
  };


  var app = {
    init: function() {
      console.log('App : init');

        $('.top').on('click', app.top)



  //DECLENCHEMENT DES FONCTIONS
  },


  //Retour menu vers le haut
  top: function(){
    $('html').animate({scrollTop:0}, 'slow');
    return false;
  }
  };

  $(app.init);

// Fin chargement DOM
});
