$('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);

(function($) {
	$(document).ready(function() {
		window.pulse_image = null;
		window.pulse_continue_loop = false;
		
		$('.helena').mouseover(function() {
			// User is hovering over the image.
			window.pulse_continue_loop = true;
			window.pulse_image = $(this);
			
			PulseAnimation(); // start the loop		
		}).mouseout(function() {
			window.pulse_continue_loop = false;
			window.pulse_image.stop();
			window.pulse_image.css('opacity',1);
		});
	});
})(jQuery);
