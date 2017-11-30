var btnPr = document.getElementsByClassName('btnPr');
var imgBack = document.getElementById('imgBack');
var loading = document.getElementById('loading');
var check = false;
var countSShow = 0;
var xhrList = [];
var urlList = [];
var imgFinished = 0;
var imgLoaded = false;

window.onload = function(){
	checkLoad();
	if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) check = true;
		if(check){
      slideShow(0);
      imgBack.style.height = "100%";
      setInterval(function(){
        countSShow++;
        slideShow(countSShow);
        if(countSShow >= 16) countSShow = -1;
      },2500);
		}else{
        enableHover();
		}
}

function slideShow(n){
  switch (n) {
    case 0:
      removeBack();
      imgBack.setAttribute('src', 'img/home1.jpg');
      btnPr[0].style.background = "#fff";
    break;
    case 1:
      removeBack();
      imgBack.setAttribute('src', 'img/home2.jpg');
      btnPr[1].style.background = "#fff";
    break;
    case 2:
      removeBack();
      imgBack.setAttribute('src', 'img/home3.jpg');
      btnPr[2].style.background = "#fff";
    break;
    case 3:
      removeBack();
      imgBack.setAttribute('src', 'img/home4.jpg');
      btnPr[3].style.background = "#fff";
    break;
    case 4:
      removeBack();
      imgBack.setAttribute('src', 'img/home5.jpg');
      btnPr[4].style.background = "#fff";
    break;
    case 5:
      removeBack();
      imgBack.setAttribute('src', 'img/home6.jpg');
      btnPr[5].style.background = "#fff";
    break;
    case 6:
      removeBack();
      imgBack.setAttribute('src', 'img/home7.jpg');
      btnPr[6].style.background = "#fff";
    break;
    case 7:
      removeBack();
      imgBack.setAttribute('src', 'img/home8.jpg');
      btnPr[7].style.background = "#fff";
    break;
    case 8:
      removeBack();
      imgBack.setAttribute('src', 'img/home9.jpg');
      btnPr[8].style.background = "#fff";
    break;
    case 9:
      removeBack();
      imgBack.setAttribute('src', 'img/home10.jpg');
      btnPr[9].style.background = "#fff";
    break;
    case 10:
      removeBack();
      imgBack.setAttribute('src', 'img/home11.jpg');
      btnPr[10].style.background = "#fff";
    break;
    case 11:
      removeBack();
      imgBack.setAttribute('src', 'img/home12.jpg');
      btnPr[11].style.background = "#fff";
    break;
    case 12:
      removeBack();
      imgBack.setAttribute('src', 'img/home13.jpg');
      btnPr[12].style.background = "#fff";
    break;
    case 13:
      removeBack();
      imgBack.setAttribute('src', 'img/home14.jpg');
      btnPr[13].style.background = "#fff";
    break;
    case 14:
      removeBack();
      imgBack.setAttribute('src', 'img/home15.jpg');
      btnPr[14].style.background = "#fff";
    break;
    case 15:
      removeBack();
      imgBack.setAttribute('src', 'img/home16.jpg');
      btnPr[15].style.background = "#fff";
    break;
    case 16:
      removeBack();
      imgBack.setAttribute('src', 'img/home17.jpg');
      btnPr[16].style.background = "#fff";
    break;
  }
}



function removeBack(){
  for(var i = 0; i<btnPr.length; i++){
    btnPr[i].style.background = "none";
  }
	for(var i = 0; i<btnPr.length; i++){
		btnPr[i].addEventListener('click', function () {
			this.style.background = "#FFF !important";
		});
		btnPr[i].addEventListener('mouseover', function () {
			this.style.background = "#FFF !important";
		});
	}
}

function checkLoad(){
  for( var i = 1; i <= 17; i++){
    urlList.push('img/home'+i+'.jpg');
  }

  for(var i=0; i<urlList.length; i++){
    xhrList[i] = new XMLHttpRequest();
    xhrList[i].open('GET', urlList[i], true);
    xhrList[i].responseType = "blob";
    xhrList[i].onload = function (e){
      if(this.readyState == 4){
        imgFinished++;
        var num = Math.round(imgFinished * 11.112 );
        // percentage.style.height = num + "%";
        if(imgFinished == 16){
        imgLoaded = true;
				setTimeout(function(){ loading.style.opacity = "0" },1000);
				setTimeout(function(){ loading.style.display = "none" },1100);
        }
      }
    }
    xhrList[i].send();
  }
}

function enableHover(){
  btnPr[0].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home1.jpg');
  });
  btnPr[1].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home2.jpg');
  });
  btnPr[2].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home3.jpg');
  });
  btnPr[3].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home4.jpg');
  });
  btnPr[4].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home5.jpg');
  });
  btnPr[5].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home6.jpg');
  });
  btnPr[6].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home7.jpg');
  });
  btnPr[7].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home8.jpg');
  });
  btnPr[8].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home9.jpg');
  });
  btnPr[9].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home10.jpg');
  });
  btnPr[10].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home11.jpg');
  });
  btnPr[11].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home12.jpg');
  });
  btnPr[12].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home13.jpg');
  });
  btnPr[13].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home14.jpg');
  });
  btnPr[14].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home15.jpg');
  });
  btnPr[15].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home16.jpg');
  });
  btnPr[16].addEventListener('mouseenter', function(){
    imgBack.setAttribute('src', 'img/home17.jpg');
  });
}
