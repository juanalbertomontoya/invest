/* Detecta el scroll para cambiar estilos */

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 10) {
    $(".menu-principal").addClass("scroll");
   } else {
    $(".menu-principal").removeClass("scroll");
   }
});

/* Anima los botones al hover */

$(".boton-menu").hover(function () {
  $(this).toggleClass("on");
});

$(".boton-mobile").click(function () { 
  $(".menu").toggleClass("on");
});