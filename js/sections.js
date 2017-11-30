var slides = document.getElementsByClassName('slide');
var bullets = document.getElementById('bullets');
var lengthSlides = slides.length;
var countSlider = 0;

window.onload = function(){
  initSlider();
  detectswipe('onDetect', swipeTransform);
}


document.onkeydown = checkKey;

function initSlider(){
  slides[0].classList.add('showSlide');
  for(var i = 1; i<lengthSlides; i++){
    slides[i].classList.add('hideSlide');
  }
  for(var i = 0; i<lengthSlides; i++){
    var liDom = document.createElement("LI");
    bullets.appendChild(liDom);
    liDom.style.cursor = "pointer";
    liDom.addEventListener("mouseenter", function(){ this.style.opacity = "0.5"; });
    liDom.addEventListener("mouseout", function(){ this.style.opacity = "1"; });
    liDom.setAttribute('onclick', 'slider(' + i + ')');
  }
}
function slider(n){
  for(var i = 0; i<lengthSlides; i++){
    slides[i].classList.remove('showSlide');
    slides[i].classList.add('hideSlide');
  }
  slides[n].classList.add('showSlide');
}

function checkKey(e){
  e = e || window.event;
    if (e.keyCode == '37') {
      countSlider--;
      if(countSlider < 0) countSlider = lengthSlides - 1;
      slider(countSlider);
    }
    else if (e.keyCode == '39') {
      countSlider++;
      if(countSlider > lengthSlides - 1 ) countSlider = 0;
      slider(countSlider);
    }
}

function detectswipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 20;
  var max_x = 40;
  var min_y = 40;
  var max_y = 50;
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX;
    swipe_det.sY = t.screenY;
  },false);

  ele.addEventListener('touchmove',function(e){
    e.preventDefault();
    var t = e.touches[0];
    swipe_det.eX = t.screenX;
    swipe_det.eY = t.screenY;
  },false);

  ele.addEventListener('touchend',function(e){
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
      if(swipe_det.eX > swipe_det.sX) direc = "r";
      else direc = "l";
    }
    if (direc != "") {
        if(typeof func == 'function') func(el,direc);
    }
    direc = "";
  },false);
}


function swipeTransform(el,d) {
  if(d == "l") {
    countSlider++;
    if(countSlider > lengthSlides - 1 ) countSlider = 0;
    slider(countSlider);
  } //l
  if(d == "r"){
    countSlider--;
    if(countSlider < 0) countSlider = lengthSlides - 1;
    slider(countSlider);
  } //r
}
