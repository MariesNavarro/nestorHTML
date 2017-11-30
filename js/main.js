"use strict";
let checkBowser = false;
if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkBowser = true;
window.console.log("%cCoded by Mn - http://fluo.com.mx", "color:pink;  font-size: 10px; background:#000; padding:2px;");
function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }

window.onload = function(){

}

var c = 0;
function slideLoop(){
	let wr = _('#imgBack'),
			img = wr.children[0],
			lis = __('#urls>li'),
			urls = __('#urls>li>a'),
			msrc;
	for (var i = 0; i < urls.length; i++) {
		urls[i].setAttribute('data-img', 'img/home'+i+'.jpg');
		if(!checkBowser) urls[i].setAttribute('onmouseover', 'enableEnter(this)');
	}
	if(checkBowser){
		img.setAttribute('src', ' ');
		wr.style.backgroundImage = "url('img/home0.jpg')";
		setInterval(function(){
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.background = "none";
				lis[i].children[0].style.textDecoration = "none";
			}
			c++;
			if(c >= lis.length) c = 0;
			lis[c].style.background = "#fff";
			lis[c].children[0].style.textDecoration = "underline";
			msrc = lis[c].children[0].getAttribute('data-img');
			wr.style.backgroundImage = "url("+msrc+")";
		},2500);
	}
}

function slideHover(){
	let urls = __('#urls>li>a');
	for (var i = 0; i < urls.length; i++) {
		urls[i].setAttribute('data-img', 'img/home'+i+'.jpg');
		if(!checkBowser) urls[i].setAttribute('onmouseover', 'enableEnter(this)');
	}
}

function enableEnter(t){
	let wr = _('#imgBack>img'),
			dsrc = t.getAttribute('data-img');
	wr.setAttribute('src', dsrc);
}

slideLoop();

// var btnPr = document.getElementsByClassName('btnPr');
// var imgBack = document.getElementById('imgBack');
// var loading = document.getElementById('loading');
// var check = false;
// var countSShow = 0;
// var xhrList = [];
// var urlList = [];
// var imgFinished = 0;
// var imgLoaded = false;

// window.onload = function(){
// 	checkLoad();
// 	if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) check = true;
// 		if(check){
//       slideShow(0);
//       imgBack.style.height = "100%";
//       setInterval(function(){
//         countSShow++;
//         slideShow(countSShow);
//         if(countSShow >= 16) countSShow = -1;
//       },2500);
// 		}else{
//         enableHover();
// 		}
// }



// function checkLoad(){
//   for( var i = 1; i <= 17; i++){
//     urlList.push('img/home'+i+'.jpg');
//   }
//
//   for(var i=0; i<urlList.length; i++){
//     xhrList[i] = new XMLHttpRequest();
//     xhrList[i].open('GET', urlList[i], true);
//     xhrList[i].responseType = "blob";
//     xhrList[i].onload = function (e){
//       if(this.readyState == 4){
//         imgFinished++;
//         var num = Math.round(imgFinished * 11.112 );
//         // percentage.style.height = num + "%";
//         if(imgFinished == 16){
//         imgLoaded = true;
// 				setTimeout(function(){ loading.style.opacity = "0" },1000);
// 				setTimeout(function(){ loading.style.display = "none" },1100);
//         }
//       }
//     }
//     xhrList[i].send();
//   }
// }
