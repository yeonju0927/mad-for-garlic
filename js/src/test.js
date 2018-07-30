(function($) {


var adBanner = $('.adBanner');
var adLiclone = adBanner.find('li').eq(0).clone();
var bannerUl = adBanner.children('ul');
bannerUl.append(adLiclone);
var bannerLi = bannerUl.children('li');
var abLength = adBanner.find('li').length;
bannerUl.css({width:abLength * 100 + '%'});
bannerLi.css({width:100 / abLength +'%'});
var addr = "../img/adBox/";
var image = ['banner01_pc.jpg','banner02_pc.jpg','banner03_pc.jpg'];

for(var i = 0; i<abLength; i+=1){
  if(i == abLength-1){
    bannerLi.eq(i).css({backgroundImage: 'url("'+ addr + image[0] +'")'}); 
  }else{
    bannerLi.eq(i).css({backgroundImage: 'url("'+ addr + image[i] +'")'}); 
  }
}

var indicator = $('.indicator');
var indiLi = indicator.children('li');
var num= 0;

var CommonFn = function(n){
  var move = n * -100 + '%';
  bannerUl.animate({marginLeft:move}, 2000);
  indiLi.eq(n).addClass('active');
  indiLi.eq(n).siblings('li').removeClass('active');
};

indiLi.on('click', function(e){
e.preventDefault();
var it = $(this);
num = it.index();
CommonFn(num);
});




}); (jQuery);