(function(){
	
	if ($.browser.mozilla || navigator.userAgent.indexOf("Firefox") > -1) {
		
		$("head").append("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' type='text/css' media='screen'>" +
			"<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet'>");
		
	}
	
})();

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
	
	var leftWindow,
		rightWindow,
		centerWindow = document.querySelector('.about-windows .window-center button'),
		centerWindowImage = document.querySelector('.about-windows .window-center button').style.backgroundImage;

	if(string === 'left') {
		
		leftWindow = document.querySelector('.about-windows .window-left button');
		centerWindow.style.backgroundImage = leftWindow.style.backgroundImage;
		leftWindow.style.backgroundImage = centerWindowImage;

	} else if(string === 'right') {
		
		rightWindow = document.querySelector('.about-windows .window-right button')
		centerWindow.style.backgroundImage = rightWindow.style.backgroundImage;
		rightWindow.style.backgroundImage = centerWindowImage;

	} else {

		return false;

	}

}

function navbarToggle(element) {
	$(element).slideToggle(300);
}
