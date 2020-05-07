(function($) {
	"use strict" 


	$(document).click(function(event) {
		if ($(event.target).closest($('.has-dropdown > a')).length)
		{
			//$(this).parent().toggleClass('active');
			$('.has-dropdown').toggleClass('active');
		} 
	});

	// Mobile dropdown
	/*
	$('.has-dropdown>a').on('click', function() {
		$(this).parent().toggleClass('active');
	});
	*/

	// Aside Nav
	$(document).click(function(event) {
		if (!$(event.target).closest($('#nav-aside')).length) {
			/*menude herhangi bir yere basınca kapanır. */
			if ( $('#nav-aside').hasClass('active') ) {
				$('#nav-aside').removeClass('active');
				$('#nav').removeClass('shadow-active');
			} 
			/* yan navı açar*/
			else {
				if ($(event.target).closest('.aside-btn').length) {
					$('#nav-aside').addClass('active');
					$('#nav').addClass('shadow-active');
				}
			}
		}
	});

/*Ben ekledim*/
	$(document).click(function(event) {
		if ($(event.target).closest($('.nav-aside-close')).length)
		{
			if ( $('#nav-aside').hasClass('active') ) {
				$('#nav-aside').removeClass('active');
				$('#nav').removeClass('shadow-active');
			} 
		}
	});
	
/* Hazır gelen
	$('.nav-aside-close').click(function() {
		$('#nav-aside').removeClass('active');		
		$('#nav').removeClass('shadow-active');
	  });
	  
*/



$(document).click(function(event) {
	if ($(event.target).closest($('.search-btn')).length)
	{
		$('#nav-search').toggleClass('active');
	}
});
	/*
	$('.search-btn').on('click', function() {
		$('#nav-search').toggleClass('active');
	});
	*/

	$(document).click(function(event) {
		if ($(event.target).closest($('.search-close')).length)
		{
			$('#nav-search').removeClass('active');
		}
	});
	/*
	$('.search-close').on('click', function () {
		$('#nav-search').removeClass('active');
	});
	*/

	// Parallax Background
	$.stellar({
		responsive: true
	});
})(jQuery);
