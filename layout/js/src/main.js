$(document).ready(function(){

	var charts = $('.charts'),
		showed = false;
	
	$('.slider').bxSlider();

	$('.clients-slider').bxSlider({
		auto: true,
		slideWidth: 170,
		slideMargin: 30,
		minSlides: 1,
		maxSlides: 6,
		moveSlides: 1,
		pager: false
	});
	
	$(window).scroll( function(){
		if (!showed && $(window).scrollTop() + $(window).height() > (charts.offset().top + charts.outerHeight()/2)) {			
			$('.chart').each( function(i, el){
				$(this).easyPieChart({
					barColor: '#e2534b',
					trackColor: '#76c7c0',
					lineCap: 'butt',
					lineWidth: 16,
					size: 120,
					rotate: 270,
					scaleLength: 0,
					onStep: function(from, to, percent) {
						$(this.el).find('.chart-percent').text(Math.round(percent));
					}
				});
				$(this).animate({'opacity':'1'},1000);
			});
			showed = true;
		};
	});
});

function shuffleCard(string) {
	var centerWindow = document.querySelector('.about-windows .window-center button'),
		leftWindow = document.querySelector('.about-windows .window-left button'),
		rightWindow = document.querySelector('.about-windows .window-right button');

	if(string === 'left') {

		centerWindow.style.backgroundImage = leftWindow.style.backgroundImage;
		leftWindow.style.backgroundImage = centerWindow.style.backgroundImage;

	} else if(string === 'right') {

		centerWindow.style.backgroundImage = rightWindow.style.backgroundImage;
		rightWindow.style.backgroundImage = centerWindow.style.backgroundImage;

	} else {

		return false;

	}
}
