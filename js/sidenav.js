var $sidenav = $('.sidenav'),
    $toggler = $('.navbar-toggler'),
    $Reverse_Text = $('.Reverse_Text'),
    $Empty = $('.Empty'),
    $Reverse_Text_Drafts1 = $('.Reverse_Text_Drafts1'),
    $Empty_1=$('.Empty_1'),
    $Reverse_Text_Second=$('.Reverse_Text_Second'),
    $Empty_2=$('Empty_2'),
    $Reverse_Text_Details=$('.Reverse_Text_Details'),
    $Empty_Details=$('.Empty_Details'),
    $Reverse_Text_Last=$('.Reverse_Text_Last'),
    $Empty_Last=$('.Empty_Last'),
    $ImageShowing=$('.ImageShowing'),
    $Reverse_Text_CMIST=$('.Reverse_Text_CMIST'),
    $Empty_CMIST=$('.Empty_CMIST'),
    $MyInfo=$('.MyInfo'),
    $Empty_AboutMe=$('.Empty_AboutMe'),
    collapsed = false;
    togglerIcon="url('../images/Links/Menu_R.png')"
$sidenav.css('top', $('.navbar').outerHeight());

if (window.innerWidth < 768) {
  collapse();
  CoinsAppendent();
}
if (window.innerWidth < 993) {
  $('.MyInfo > div').appendTo('.Empty_AboutMe');
}

$(window).resize(function() {
  if (window.innerWidth < 768) {
    console.log(collapsed);
    collapse();
    CoinsAppendent();
  } else {
    console.log(collapsed);
    restore();
    CoinsRestore();
  }
  if(window.innerWidth<993){
    $('.MyInfo > div').appendTo('.Empty_AboutMe');
  }else{
    $('.Empty_AboutMe > div').appendTo('.MyInfo');
  }
});

$toggler.click(function() {
  if (!$sidenav.hasClass('show')) {
    showSidenav();
  } else {
    hideSidenav();
  }
})

function showSidenav() {
  $sidenav.css('display', 'flex');
  window.setTimeout(function() {
    // Must be number value. Adjust as needed.
    $sidenav.css({
      'width':'200px', 
      'box-shadow':'-10px 10px 512px 256px #000000cc', 
      'background-color':'#000000db'
    });
  }, 10);
  $toggler.addClass('active');
  $sidenav.addClass('show');
}

function hideSidenav() {
  $sidenav.css({
    'width':'0px', 
    'box-shadow':'none',
    'background':'transparent'
  });
  window.setTimeout(function() {
    $sidenav.css('display', 'none');
  }, 500);
  $toggler.removeClass('active');
  $sidenav.removeClass('show');
}

function collapse() {
  if (!collapsed) {
    $('.navbar-collapse > ul').appendTo('.sidenav').addClass('w-100 text-center');
    $('.sidenav > ul .nav-link').addClass('w-100');
    $ImageShowing.addClass('active');
    collapsed = true;
  }
}

function restore() {
  if (collapsed) {
    $('.sidenav > ul').appendTo('.navbar-collapse').removeClass('w-100 text-center');
    $('.sidenav > ul .nav-link').removeClass('w-100');
    hideSidenav();
    $ImageShowing.removeClass('active');
    collapsed = false;
  }
}

function CoinsAppendent(){
  $('.Reverse_Text > div').appendTo('.Empty');
  $('.Reverse_Text_Drafts1 > div').appendTo('.Empty_1');
  $('.Reverse_Text_Second > div').appendTo('.Empty_2');
  $('.Reverse_Text_Details > div').appendTo('.Empty_Details');
  $('.Reverse_Text_Last > div').appendTo('.Empty_Last');
  $('.Reverse_Text_CMIST > div').appendTo('.Empty_CMIST');

}
function CoinsRestore(){
  $('.Empty > div').appendTo('.Reverse_Text');
    $('.Empty_1 > div').appendTo('.Reverse_Text_Drafts1');
    $('.Empty_2 > div').appendTo('.Reverse_Text_Second');
    $('.Empty_Details > div').appendTo('.Reverse_Text_Details');
    $('.Empty_Last > div').appendTo('.Reverse_Text_Last');
    $('.Empty_CMIST > div').appendTo('.Reverse_Text_CMIST');


}