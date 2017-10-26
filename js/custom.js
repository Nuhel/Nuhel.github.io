$( document ).ready(function() {
  var $document = $(document),
    $element = $('.ploting_nav'),
    className = 'ploting_nav_bg';
  function navbg(){
    if ($document.scrollTop() >= 25) {
      $element.addClass(className);
    } else {
      $element.removeClass(className);
    }
  }
  navbg();

  $document.scroll(function() {
    navbg();
  });


  /*Modal Show*/
  $('.out_div').click(function(){
    $('#about_video_modal').modal('show');
  })

  $('.navbar-toggle').click(function(){
    $(this).toggleClass('cross');
  });
});

/*WOW Animation init*/
new WOW().init();


/*Message Send Script*/
$('#contact_form').submit(function(e){
  e.preventDefault()
  $.ajax({
    url: "sendmail.php",
    type: "POST",
    data: $('#contact_form').serialize(),
    success: function (data) {
      //console.log(data);
      $('#sendmail_message').html(data);
    }
  });
});


/*Smooth Scrool*/
$('.ploting_nav a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      var targetOffset = target.offset().top;
      $('html,body').animate({scrollTop: targetOffset - 70}, 1000);
      return false;
    }
  }
});


/*Portfolio JS*/
$('.ploting_tab_nav a').click(function(e){
  e.preventDefault()
  var tis = $(this);
  $('.ploting_tab_nav').find('.active').removeClass('active');
  tis.closest('li').addClass('active');
  var name = tis.data('show');
  $('#portfolio').find('.img_div').hide();
  if(name != '*'){
    $('#portfolio').find('.'+name).show();
    console.log(name);
  }else{
    $('#portfolio').find('.img_div').show();
  }
});