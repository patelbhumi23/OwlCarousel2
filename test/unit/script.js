//On Load Scripts
$(function() {
	//alert("load");
	$('.owl-carousel.carousel-1').owlCarousel({
		nav: true,
		loop: true,
		items: 2,
		margin: 10,
		autoplay: true
	});

	$('.owl-carousel.carousel-2').owlCarousel({
		nav: true,
		items: 2,
		margin: 10
	});

});
