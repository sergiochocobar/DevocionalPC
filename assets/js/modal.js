$('.gallery__img-one').click(function(e){
	var img = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="assets/img/ediciones/ediciones-big/2013-big.jpg" class="modal__img"><div class="modal__boton"><i id="modal__boton" class="ti-close"></i></div></div>';
	$('body').append(modal);
	$('#modal__boton').click(function(){
		$('#modal').remove();
	})
});


$('.gallery__img-two').click(function(e){
	var img = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="assets/img/ediciones/ediciones-big/2012-big.jpg" class="modal__img"><div class="modal__boton"><i id="modal__boton" class="ti-close"></i></div></div>';
	$('body').append(modal);
	$('#modal__boton').click(function(){
		$('#modal').remove();
	})
});

$('.gallery__img-three').click(function(e){
	var img = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="assets/img/ediciones/ediciones-big/2010-big.jpg" class="modal__img"><div class="modal__boton"><i id="modal__boton" class="ti-close"></i></div></div>';
	$('body').append(modal);
	$('#modal__boton').click(function(){
		$('#modal').remove();
	})
});


$('.gallery__img-four').click(function(e){
	var img = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="assets/img/ediciones/ediciones-big/2009-big.jpg" class="modal__img"><div class="modal__boton"><i id="modal__boton" class="ti-close"></i></div></div>';
	$('body').append(modal);
	$('#modal__boton').click(function(){
		$('#modal').remove();
	})
});



$(document).keyup(function(e){
	if (e.which==27) {
		$('#modal').remove();
	}
});
















//	var modal = '<div class="modal" id="modal"><img src="' + img + '" class="modal__img"><div class="modal__boton"><i id="modal__boton" class="ti-close"></i></div></div>';
