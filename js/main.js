


$(window).on('load', function () {


	$(".loader").fadeOut();
	$("#preloder").delay(800).fadeOut("slow");


});

function rotate() {
	var lastChild = $('.slider div:last-child').clone();
	$('.slider div').removeClass('firstSlide')
	$('.slider div:last-child').remove();
	$('.slider').prepend(lastChild)
	$(lastChild).addClass('firstSlide')
}

window.setInterval(function () {
	rotate()
}, 3000);
