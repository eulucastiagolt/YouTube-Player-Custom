// var loadapiyoutube = document.createElement("script");
// loadapiyoutube.src = "//www.youtube.com/player_api";
// loadapiyoutube.type = "text/javascript";
// document.head.appendChild(loadapiyoutube);

var addMomentjs = document.createElement("script");
addMomentjs.src = "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js";
addMomentjs.type = "text/javascript";
document.head.appendChild(addMomentjs);

var addicon = document.createElement('link');
addicon.rel = "stylesheet";
addicon.type = "text/css";
addicon.href = "//cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic.min.css";
document.head.appendChild(addicon);

var barradeprogress = document.createElement('style');
barradeprogress.rel = "stylesheet";
barradeprogress.type = "text/css";
barradeprogress.innerText += "#progresso::-moz-progress-bar { background: #ff6600; }";
barradeprogress.innerText += "#progresso::-webkit-progress-bar { background: #111; }";
barradeprogress.innerText += "#progresso::-webkit-progress-value { background: #ff6600; }";
document.head.appendChild(barradeprogress);

function app(){
	
}