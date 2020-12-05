//slider area
$(document).ready(function(){
  $('.slider_area').bxSlider();
  $('#main_menu').meanmenu({
    meanMenuContainer: '#mobileMenu',
    meanScreenWidth: 810,
  }
  );
});

//menubar



//motion

$('.slider_area').bxSlider({
  auto: true,
  autoControls: false,
  // stopAutoOnClick: true,
  pager: true,
  pause: "5000",
  speed: "3000",
  autoHover: true,
  mode: 'vertical',
  slideWidth: 400,
});

//date 

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();