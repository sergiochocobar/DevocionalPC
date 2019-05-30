
/**** Burguer Menu to Close Change ****/

function bgmenu (){
  document.getElementById("icon").classList.toggle ("menu-bar-onclick");
  document.getElementById("icon").classList.toggle ("ti-menu");
  document.getElementById("icon").classList.toggle ("ti-close");
}
document.getElementById("btn-menu").onclick = function (){
  bgmenu();
};


/**** Smooth Link Navigation ****/

$(document).ready(function() {
  var scrollLink = $('.scroll');
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })
});

/**** Icons Topbar Class Changer ****/

$(document).on('scroll',function(){
  if($(this).scrollTop() > 100){
    $('header').addClass('sticky');
  }else{
    $('header').removeClass('sticky')
  }
});

$(document).on('scroll',function(){
  if($(this).scrollTop() > 100){
    $('#icon').addClass('sticky-menu-color');
  }else{
    $('#icon').removeClass('sticky-menu-color')
  }
});


$(document).on('scroll',function(){
  if($(this).scrollTop() > 100){
    $('#facebook, #instagram, #twitter, #youtube').addClass('sticky-text');
  }else{
    $('#facebook, #instagram, #twitter, #youtube').removeClass('sticky-text')
  }
});


$(document).on('scroll',function(){
  if($(this).scrollTop() > 100){
    $('#instagram').addClass('border-instagram');
  }else{
    $('#instagram').removeClass('border-instagram')
  }
});

$(document).on('scroll',function(){
  if($(this).scrollTop() > 100){
    $('#facebook').addClass('border-facebook');
  }else{
    $('#facebook').removeClass('border-facebook')
  }
});

$(document).on('scroll',function(){
  if($(this).scrollTop() > 100){
    $('#twitter').addClass('border-twitter');
  }else{
    $('#twitter').removeClass('border-twitter')
  }
});

$(document).on('scroll',function(){
  if($(this).scrollTop() > 100){
    $('#youtube').addClass('border-youtube');
  }else{
    $('#youtube').removeClass('border-youtube')
  }
});