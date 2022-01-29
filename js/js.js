if (callhunterON != undefined && ctd24ON != undefined && ctd60ON != undefined && ctdtestON != undefined && ctdspanON != undefined && anchor != undefined) {
	var callhunterON;
	var ctd24ON;
	var ctdtestON;
	var ctd60ON;
	var ctdspanON;
	var anchor; 
}


/* ========== Плавный якорь ===================================== */

if (anchor == true) {
	$(document).ready(function() { 
		$('a[href^="#"]').on('click', function() {
			var target = $(this).attr('href');
			if (target.search('#modal') == -1) {
				$('html, body').animate({scrollTop: $(target).offset().top}, 800);
				return false;
			}
		});  
	});
}

/* ========== Плавный якорь ===================================== */
