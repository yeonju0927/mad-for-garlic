// mfgarlic_store.js

(function($){

var moreI = $('.moreI');
var moreBtn = $('.more');
var storeLi = $('.store_img').children('li');
var storeLiLen = storeLi.length;
var wind = $(window);
var windWidth = wind.outerWidth();

if (windWidth <= 480) {
var a = 3;

storeLi.eq(a).nextAll().hide();

moreBtn.on('click', function(e){
  e.preventDefault();
  a+=5;
storeLi.eq(a).prevAll().show();
  if(a >= storeLiLen){
    a= storeLiLen-1; 
    moreBtn.hide();
  }


});

}else if (windWidth >= 481 && windWidth <= 768) {

var a = 11;

  storeLi.eq(a).nextAll().hide();
  moreBtn.on('click', function(e){
    e.preventDefault();
    a+=11;
    storeLi.eq(a).prevAll().show();
    if(a >= storeLiLen){
      a= storeLiLen-1;
      moreBtn.hide();
    }

});

}else if (windWidth >=769 && windWidth <=1366) {

  var a = 15;

  storeLi.eq(a).nextAll().hide();
  moreBtn.on('click', function(e){
    e.preventDefault();
    a+=7;
    storeLi.eq(a).prevAll().show();
    if(a >= storeLiLen){
      a= storeLiLen-1;
      moreBtn.hide();
    }

  });

}else {

var a = 14;

  storeLi.eq(a).nextAll().hide();
  moreBtn.on('click', function(e){
    e.preventDefault();
    a+=14;
    storeLi.eq(a).prevAll().show();
    if(a >= storeLiLen){
      a= storeLiLen-1;
      moreBtn.hide();
    }

  });





}


storeLi.on('mouseenter', function(){

$(this).addClass('active');
$(this).siblings('li').removeClass('active');

});

storeLi.on('mouseleave', function(){

$(this).removeClass('active');
});



})(jQuery);





// var ;
// () ? : ;
// var a =function(){};
// FFF();
// j+=1;
// k = [];
// (function A(){})();

// if(){}
// for(){}
// function(){}
// switch(){}

