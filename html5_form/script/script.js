// JavaScript Document

// Script to show value of the range slider.
function showValue(newValue)
{document.getElementById("range").innerHTML=newValue;}

// Script to animate progress bar.
$(document).ready(function(){
	var interval = 2,
	updatesPerSecond = 1000/60,
	progress =  $('progress'),
	animator = function(){
		progress.val(progress.val()+interval);
		$('#val').text(progress.val());
		if ( progress.val()+interval < progress.attr('max')){
			setTimeout(animator, updatesPerSecond);
		} else {
			$('#val').text('Done');
			progress.val(progress.attr('max'));
			}
		}
       
// Script to make the progress button work.
$('#theButton').click(function(e) {
	e.preventDefault();
	animator();
	});
});