console.log("helloworld");


$(document).ready(function(){

$('#men, #women, #home').hide();

$('#menNav').click(function(){
  $(this).css('color','cyan');
  $('#men').show();
  $('#fashion, #women, #home').hide()
  $('#fashionNav, #womenNav, #homeNav').css('color','whitesmoke');;
});

$('#fashionNav').click(function(){
  $(this).css('color','cyan');
  $('menNav')
  $('#fashion').show();
  $('#men, #women, #home').hide()
  $('#menNav, #womenNav, #homeNav').css('color','whitesmoke');
});

$('#womenNav').click(function(){
  $(this).css('color','cyan');
  $('#women').show();
  $('#fashion, #men, #home').hide()
  $('#menNav, #FashionNav, #homeNav').css('color','whitesmoke');;
});

$('#homeNav').click(function(){
  $(this).css('color','cyan');
  $('#home').show();
  $('#fashion, #women, #men').hide()
  $('#menNav, #womenNav, #fashionNav').css('color','whitesmoke');;
});


// $('#b1').click(function(){
//   $('.dropdown').show();
//   // $('.button').hide();
//   // $('.b2').css('right','0');
// });

// $('#b2').click(function(){
//   $('.dropdown').hide();
// });

});

//$('nav').hide();
