/*----Javascript----*/
/*-Evenement click-*/
//0
var element = document.getElementById('clickme0');
// Premier événement click
element.addEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre confiance chère client");
});
element.removeEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre visite");
})
//1
var element = document.getElementById('clickme1');
// Premier événement click
element.addEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre confiance chère client");
});
element.removeEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre visite");
})
//2
var element = document.getElementById('clickme2');
// Premier événement click
element.addEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre confiance chère client");
});
element.removeEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre visite");
})
//3
var element = document.getElementById('clickme3');
// Premier événement click
element.addEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre confiance chère client");
});
element.removeEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre visite");
})
//4
var element = document.getElementById('clickme4');
// Premier événement click
element.addEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre confiance chère client");
});
element.removeEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre visite");
})
//5
var element = document.getElementById('clickme5');
// Premier événement click
element.addEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre confiance chère client");
});
element.removeEventListener('click', function () {
  alert("Votre commercial vous attend au 06 92 00 32 10, Merci de votre visite");
})
/*-jquery---------------------------------------------------------------------------*/
/*  Gallery d'article */
!function (d) {
  var c = "portfilter"; var b = function (e) { this.$element = d(e); this.stuff = d("[data-tag]"); this.target = this.$element.data("target") || "" };
  b.prototype.filter = function (g) { var e = [], f = this.target; this.stuff.fadeOut("fast").promise().done(function () { d(this).each(function () { if (d(this).data("tag") == f || f == "all") { e.push(this) } }); d(e).show() }) };
  var a = d.fn[c]; d.fn[c] = function (e) { return this.each(function () { var g = d(this), f = g.data(c); if (!f) { g.data(c, (f = new b(this))) } if (e == "filter") { f.filter() } }) };
  d.fn[c].defaults = {}; d.fn[c].Constructor = b; d.fn[c].noConflict = function () { d.fn[c] = a; return this }; d(document).on("click.portfilter.data-api", "[data-toggle^=portfilter]", function (f) { d(this).portfilter("filter") })
}(window.jQuery);
/*-accueil-*/
$(function () {
  $("#monBouton").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
/*-partie produit-*/
$(function () {
  $("#monBouton2").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
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
//Carousel
$('.carousel').carousel();











