$(document).ready(function() {

	// $('ul.sf-menu').superfish({
	// 	onBeforeShow: function(){
	// 		if(screen.width < 768){
	// 			console.log('before show');
	// 			return false;
				
	// 		}
	// 	},
	// 	onShow: function() {
	// 		console.log('show');
	// 	}
	// });
	alert(screen.width);
	var sf, body;
    var breakpoint = 970;
    jQuery(document).ready(function($) {
        body = $('body');
        sf = $('ul.sf-menu');
        if(body.width() >= breakpoint) {
          // enable superfish when the page first loads if we're on desktop
          sf.superfish();
        }
        $(window).resize(function() {
            if(body.width() >= breakpoint && !sf.hasClass('sf-js-enabled')) {
                // you only want SuperFish to be re-enabled once (sf.hasClass)
                sf.superfish('init');
            } else if(body.width() < breakpoint) {
                // smaller screen, disable SuperFish
                sf.superfish('destroy');
            }
        });
    });
});