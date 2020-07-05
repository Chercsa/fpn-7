

$(document).ready(function() {
  $(".header__burger").click(function(event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $('.header__list').click(function(event) {
          $('.header__burger,.header__menu').removeClass('active');
          $('body').removeClass('lock');
  });
});


$(document).ready(function() {
	$(".button-1").click(function(event) {
		$(".process__item1,.process__block-1").toggleClass("active");
		$(".process__block-1").removeClass("visually-hidden");
		$(".button__closed-1").removeClass("visually-hidden");
		$(".button-1").toggleClass("visually-hidden");
	});
});

$(document).ready(function() {
	$(".button__closed-1").click(function(event) {
		$(".process__item1,.process__block-1").removeClass("active");
		$(".process__block-1").toggleClass("visually-hidden");
		$(".button__closed-1").toggleClass("visually-hidden");
		$(".button-1").removeClass("visually-hidden");
	});
});

$(document).ready(function() {
	$(".button-2").click(function(event) {
		$(".process__item2,.process__block-2").toggleClass("active");
		$(".process__block-2").removeClass("visually-hidden");
		$(".button__closed-2").removeClass("visually-hidden");
		$(".button-2").toggleClass("visually-hidden");
	});
});

$(document).ready(function() {
	$(".button__closed-2").click(function(event) {
		$(".process__item2,.process__block-2").removeClass("active");
		$(".process__block-2").toggleClass("visually-hidden");
		$(".button__closed-2").toggleClass("visually-hidden");
		$(".button-2").removeClass("visually-hidden");
	});
});

$(document).ready(function() {
	$(".button-3").click(function(event) {
		$(".process__item3,.process__block-3").toggleClass("active");
		$(".process__block-3").removeClass("visually-hidden");
		$(".button__closed-3").removeClass("visually-hidden");
		$(".button-3").toggleClass("visually-hidden");
	});
});

$(document).ready(function() {
	$(".button__closed-3").click(function(event) {
		$(".process__item3,.process__block-1").removeClass("active");
		$(".process__block-3").toggleClass("visually-hidden");
		$(".button__closed-3").toggleClass("visually-hidden");
		$(".button-3").removeClass("visually-hidden");
	});
});

$(document).ready(function() {
	$(".button-4").click(function(event) {
		$(".process__item4,.process__block-4").toggleClass("active");
		$(".process__block-4").removeClass("visually-hidden");
		$(".button__closed-4").removeClass("visually-hidden");
		$(".button-4").toggleClass("visually-hidden");
	});
});

$(document).ready(function() {
	$(".button__closed-4").click(function(event) {
		$(".process__item4,.process__block-4").removeClass("active");
		$(".process__block-4").toggleClass("visually-hidden");
		$(".button__closed-4").toggleClass("visually-hidden");
		$(".button-4").removeClass("visually-hidden");
	});
});