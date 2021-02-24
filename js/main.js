//fix header

let header = document.querySelector('.header');

if (header) {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 610) {
      header.classList.add("header-fixed");
    }
    else {
      header.classList.remove("header-fixed");
    }
  }
}

//burger-menu

document.getElementById("trigger").onclick = function() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("change");
  }

// slider quality-indicators

$('.quality-indicators').slick({
	infinite: false,
  arrows: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
	]
});

//slider cards


$('.cards').slick({
	infinite: false,
  	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1150,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
	]
});