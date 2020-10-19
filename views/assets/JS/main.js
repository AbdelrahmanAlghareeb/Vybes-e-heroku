
$(function(){

  $(".default_option").on('click',function(){
    $(this).parent().toggleClass("active");
  })
    
  $(".select_ul li").on('click',function(){
    var currentele = $(this).html();
    $(".default_option li").html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
  })

    /*SIde Menue
  $('.menu_side_BTn').on('click', function () {
    console.log('hiiiii')
    $('.side_menu').toggleClass('open')

  })
  */

});