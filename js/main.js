$(document).on('ready', function() {
 
  $(".slider-main").slick({
    dots: true,
    infinite: true,
     nextArrow:'#next, .next',
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(".macbook").slick({
    dots: true,
    infinite: true,
    autoplay:100,
    slidesToShow: 1,
    slidesToScroll: 1,
  });



  
  
});
$('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
    }else{       $(this).children(".video").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
});

function openForm() {
  document.getElementById("myForm").style.display = "block ";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
};

