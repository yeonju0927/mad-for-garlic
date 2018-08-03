// mfgarlic_store.js

(function($){

// 더보기 버튼으로 콘텐츠 보여주기

var moreI = $('.moreI');
var moreBtn = $('.more');
var storeLi = $('.store_img').children('li');
var storeLiA = storeLi.children('a');
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


storeLiA.on('mouseenter', function(){

 $(this).addClass('active');
 $(this).siblings('a').removeClass('active');

});

storeLiA.on('mouseleave', function(){

$(this).removeClass('active');
});

// 매장 이미지 넣기


var addrs = '../img/store/small/';
var miniImg = [

{image: 'store01', nar: '가산현대아울렛점'},
{image: 'store02', nar: '강남삼성타운점'},
{image: 'store03', nar: '건대스타시티점'},
{image: 'store04', nar: '광주광천점'},
{image: 'store05', nar: '광화문D타워점'},
{image: 'store06', nar: '광화문점'},
{image: 'store07', nar: '대구현대백화점'},
{image: 'store08', nar: '대전둔산점'},
{image: 'store09', nar: '도곡점'},
{image: 'store10', nar: '동탄센터포인트몰점'},
{image: 'store11', nar: '롯데시네마수원역점'},
{image: 'store12', nar: '롯데시네마월드타워점'},
{image: 'store13', nar: '마포점'},
{image: 'store14', nar: '명동점'},
{image: 'store15', nar: '목동점'},
{image: 'store16', nar: '발산점'},
{image: 'store17', nar: '봉은사로점'},
{image: 'store18', nar: '부천중동현대점'},
{image: 'store19', nar: '분당서현점'},
{image: 'store20', nar: '사당점'},
{image: 'store21', nar: '상암엠비씨점'},
{image: 'store22', nar: '수원인계점'},
{image: 'store23', nar: '안양범계점'},
{image: 'store24', nar: '여의도점'},
{image: 'store25', nar: '역삼점'},
{image: 'store26', nar: '영등포타임스퀘어점'},
{image: 'store27', nar: '예술의전당점'},
{image: 'store28', nar: '왕십리역사점'},
{image: 'store29', nar: '용산아이파크몰점'},
{image: 'store30', nar: '울산현대백화점'},
{image: 'store31', nar: '의정부점'},
{image: 'store32', nar: '인천송도점'},
{image: 'store33', nar: '일산웨스턴돔점'},
{image: 'store34', nar: '잠원점'},
{image: 'store35', nar: '창원점'},
{image: 'store36', nar: '천안신세계백화점충청점'},
{image: 'store37', nar: '판교라스트리트점'},
{image: 'store38', nar: '평택AK플라자점'},
{image: 'store39', nar: '합정점'},
{image: 'store40', nar: '해운대점'},

]


for(var i=0; i<storeLiLen; i+=1) {

storeLi.eq(i).css({backgroundImage: 'url('+ addrs + miniImg[i].image + '.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'});

};




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

