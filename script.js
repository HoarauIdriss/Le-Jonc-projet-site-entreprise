/* form ----------------------------------------------------------------------------*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})()


/*----Javascript----*/
/*-Evenement click-*/

var element = document.getElementById('clickme');
  // Premier événement click
  element.addEventListener('click', function() {
      alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre confiance chère client");
  });
 
  element.removeEventListener('click', function() {
    alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre visite");
  })

  


/*-jquery---------------------------------------------------------------------------*/

/*-accueil-*/
$(function(){
  $("#monBouton") .click(function(){
      $("html, body").animate({scrollTop: 0},"slow");
  });
});
/*-partie produit-*/
$(function(){
  $("#monBouton2") .click(function(){
      $("html, body").animate({scrollTop: 0},"slow");
  });
})

/*-Modal-*/



/* javascript---------------------------------------------------------------------*/
/* nav-tab */

$(function () {
  $('#nav-tab li:last-child a').tab('show')
});

/*-Modal-*/
$('#myModal1').modal(options);
$('#myModal2').modal(options);
$('#myModal3').modal(options);














                  