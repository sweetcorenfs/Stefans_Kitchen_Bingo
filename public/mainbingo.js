
$(document).ready(function() {

	$('body').on('touchmove', false);
	
	$('#header').append(headerText);
	
	$('#footer').append(footerText);

	shuffle(JSONBingo.squares);
	
	for (i=0; i<25; i++) {
		$('#board').append("<div data-value='0' class='square' id='sq"+i+"' onclick='sendbuttonclicked(username, \"sq" + i + "\", \""+JSONBingo.squares[i].square+"\", \"" + '#sq' + i + "\" );'><span class='middle'>"+JSONBingo.squares[i].square+ "</span></div>");
	}

	$('div.square').tappable(function () {
		$(this).toggleClass('selected');
		if ($(this).data('value') == 1) {
			$(this).data('value', 0); 
		}else{
			$(this).data('value', 1); 
		}
		clickSnd.play();

		var row1 = ($('#sq0').data('value')+$('#sq1').data('value')+$('#sq2').data('value')+$('#sq3').data('value')+$('#sq4').data('value'));
		var row2 = ($('#sq5').data('value')+$('#sq6').data('value')+$('#sq7').data('value')+$('#sq8').data('value')+$('#sq9').data('value'));
		var row3 = ($('#sq10').data('value')+$('#sq11').data('value')+$('#sq12').data('value')+$('#sq13').data('value')+$('#sq14').data('value'));
		var row4 = ($('#sq15').data('value')+$('#sq16').data('value')+$('#sq17').data('value')+$('#sq18').data('value')+$('#sq19').data('value'));
		var row5 = ($('#sq20').data('value')+$('#sq21').data('value')+$('#sq22').data('value')+$('#sq23').data('value')+$('#sq24').data('value'));

		var col1 = ($('#sq0').data('value')+$('#sq5').data('value')+$('#sq10').data('value')+$('#sq15').data('value')+$('#sq20').data('value'));
		var col2 = ($('#sq1').data('value')+$('#sq6').data('value')+$('#sq11').data('value')+$('#sq16').data('value')+$('#sq20').data('value'));
		var col3 = ($('#sq2').data('value')+$('#sq7').data('value')+$('#sq12').data('value')+$('#sq17').data('value')+$('#sq22').data('value'));
		var col4 = ($('#sq3').data('value')+$('#sq8').data('value')+$('#sq13').data('value')+$('#sq18').data('value')+$('#sq23').data('value'));
		var col5 = ($('#sq4').data('value')+$('#sq9').data('value')+$('#sq14').data('value')+$('#sq19').data('value')+$('#sq24').data('value'));

		var diag1 = ($('#sq0').data('value')+$('#sq6').data('value')+$('#sq12').data('value')+$('#sq18').data('value')+$('#sq24').data('value'));
		var diag2 = ($('#sq4').data('value')+$('#sq8').data('value')+$('#sq12').data('value')+$('#sq16').data('value')+$('#sq20').data('value'));
		var summe = ($('#sq0').data('value')+$('#sq1').data('value')+$('#sq2').data('value')+$('#sq3').data('value')+$('#sq4').data('value')) + ($('#sq5').data('value')+$('#sq6').data('value')+$('#sq7').data('value')+$('#sq8').data('value')+$('#sq9').data('value')) + ($('#sq10').data('value')+$('#sq11').data('value')+$('#sq12').data('value')+$('#sq13').data('value')) + ($('#sq14').data('value')+$('#sq15').data('value')+$('#sq16').data('value')+$('#sq17').data('value')+$('#sq18').data('value')) + ($('#sq19').data('value')+$('#sq20').data('value')+$('#sq21').data('value')+$('#sq22').data('value')+$('#sq23').data('value')+$('#sq24').data('value'));
		summe = 0;

		if(row1 == 5){
			summe += 1;
		}
		if(row2 == 5){
			summe += 1;
		}
		if(row3 == 5){
			summe += 1;
		}
		if(row4 == 5){
			summe += 1;
		}
		if(row5 == 5){
			summe += 1;
		}
		if(col1 == 5){
			summe += 1;
		}
		if(col2 == 5){
			summe += 1;
		}
		if(col3 == 5){
			summe += 1;
		}
		if(col4 == 5){
			summe += 1;
		}
		if(col5 == 5){
			summe += 1;
		}
		if(diag1 == 5){
			summe += 1;
		}
		if(diag2 == 5){
			summe += 1;
		}

		//$('#win').html(summe + "<br>" + summe/5);
		if (row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5 || diag1 == 5 || diag2 == 5) {

			if(summe > 1){
				$('#header').html(winText2);
			}else{
				$('#header').html(winText);
			}
			//$('#header').html(winText + " " + summe);
			$('#header').addClass("win");
			if(triggeredonce == 0){
				winSnd.play();
				triggeredonce = 1;
			}
		} else {
			$('#header').html(headerText);
			$('#header').removeClass("win");
			triggeredonce = 0;
		};
	});
});


shuffle = function(v){
	for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
	return v;
};

/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
(function( win ){
	var doc = win.document;

	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash && win.addEventListener ){
		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 15 );
		win.addEventListener( "load", function(){
			setTimeout(function(){
				//at load, if user hasn't scrolled more than 20 or so...
				if( getScrollTop() < 20 ){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		} );
	}
})( this );