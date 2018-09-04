let addMomentjs = document.createElement("script");
addMomentjs.src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js";
addMomentjs.type = "text/javascript";
document.head.appendChild(addMomentjs);

let addicon = document.createElement('link');
addicon.rel = "stylesheet";
addicon.type = "text/css";
addicon.href = "//cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic.min.css";
document.head.appendChild(addicon);

let pp,
	sp = "0",
	video,
	idv = 0,
	videos = [],
	ocont = "";

let tt;

let x = document.createEvent("MouseEvent");
x.initMouseEvent("click");

function carregarvideo(deonde, codevideo) {
	tt = document.createElement("div")
	tt.id = "timeteste";
	document.getElementById(deonde).appendChild(tt);

	let localvideo = document.createElement('div');
	localvideo.id = "videoaqui" + idv;
	localvideo.style = "position: absolute; top: 0; left: 0;";
	deonde.style = "position: relative;"
	document.getElementById(deonde).appendChild(localvideo);

	document.getElementById(deonde).setAttribute("videoid", idv);
	let videoid = document.getElementById(deonde).getAttribute('idcode'), localvideoid = "videoaqui" + idv;
	if (!(videoid == "" || videoid == null || videoid == undefined)) {
		video = new YT.Player(localvideoid, {
			height: '100%',
			width: '100%',
			playerVars: {
	            'controls' : 0,
	            'rel' : 0
	        },
	        videoId : videoid
		});
	} else {
		video = new YT.Player(localvideoid, {
			height: '100%',
			width: '100%',
			playerVars: {
	            'controls' : 0,
	            'rel' : 0
	        },
	        videoId : codevideo
		});
	}
	videos.push(video);
	idv++;

	let playermodall = "display: inline-block;";
		playermodall += "position:relative;";
		playermodall += "width: 100%; height: 100%;";
	document.getElementById(deonde).style = playermodall;

	let playercontrole = document.createElement('div'), pcstyle;
	document.getElementById(deonde).appendChild(playercontrole);
	pcstyle = "width:100%;";
	pcstyle += "height:100%;";
	pcstyle += "position:absolute;";
	pcstyle += "top:0; left:0;";
	pcstyle += "z-index:5;";
	playercontrole.style = pcstyle;

	let btnplay_pause = document.createElement("div"), btnpstyle,
		barra = document.createElement("div"), bstyle,
		progresso = document.createElement("div"), pstyle;
	bstyle = "width: 100%; height: 10px; background:#333; position: absolute; bottom:0;";
	barra.style = bstyle;
	barra.id = "barra";

	pstyle = "width: 0px; height: 10px; background:#f60; position: absolute; left: 0; right: 0;";

	progresso.style = pstyle;
	progresso.id = "barra_interno";

	playercontrole.appendChild(barra);
	barra.appendChild(progresso);
	playercontrole.appendChild(btnplay_pause);


	btnpstyle = "width:90px; height:55px; background: #f60; border-radius:50px;";
	btnpstyle += "transform:translate(-50%, -50%); position: relative; left:50%; top: 50%;";
	btnpstyle += "text-align: center; line-height: 70px; color: #fff; font-size:2.5rem;";
	btnplay_pause.innerHTML = '<span class="oi" data-glyph="media-play"></span>';
	btnplay_pause.style = btnpstyle;
	btnplay_pause.querySelector("span").style = "display: inline-block; transform: translate(-41%, -46%); position: absolute; top: 50%; left: 50%;";
	let btppnvds = btnplay_pause.onclick = function() {
		pp = btnplay_pause.getAttribute("vdStatus");
		let iddv = parseInt(document.getElementById(deonde).getAttribute("videoid")) + 1;
		if(pp == null || pp == undefined || pp == "" || pp == "0") {
			for(let i in videos){
				if (videos[i].g == iddv) {
					videos[i].playVideo();
					duracao(videos[i]);
					btnplay_pause.innerHTML = '<span class="oi" data-glyph="media-pause"></span>';
					btnplay_pause.querySelector("span").style = "display: inline-block; transform: translate(-50%, -50%); position: absolute; top: 50%; left: 50%;";
					btnplay_pause.setAttribute("vdStatus", '1');
					ocont = setTimeout(function(){
						btnplay_pause.style.display = "none";
					}, 2000);
				}
			}
		}else{
			btnplay_pause.innerHTML = '<span class="oi" data-glyph="media-play"></span>';
			sp = "0";
			for(let i in videos){
				if (videos[i].g == iddv) {
					videos[i].pauseVideo();
					clearInterval(timeUpdate);
					btnplay_pause.querySelector("span").style = "display: inline-block; transform: translate(-41%, -46%); position: absolute; top: 50%; left: 50%;";
					btnplay_pause.setAttribute("vdStatus", '0');
				}
			}
		}
	}	
	let timeo;
	playercontrole.onmousemove = function(){
		btnplay_pause.style.display = "block";
		clearTimeout(ocont);
        if(timeo) clearTimeout(timeo);
        	timeo = setTimeout(function(){
            if("1" == btnplay_pause.getAttribute("vdStatus")){
                ocont = setTimeout(function(){
                     btnplay_pause.style.display = "none";
                }, 2000);
            }
        }, 2000);
        
	}

	return videos;
}

function duracao(v){
	timeUpdate = setInterval(function(){
		curtime = parseInt(v.getCurrentTime(), 10);
		formataTempo(v, curtime);

		if(v.getDuration() > 0){
			//verePlaylist(v.getCurrentTime(), v.getDuration());
		
			if (v.getDuration() == v.getCurrentTime()) {
				v.a.parentElement.lastChild.lastChild.style.display = "block";
				v.a.parentElement.lastChild.lastChild.dispatchEvent(x);
				v.stopVideo();
			}
		}

	}, 1);
}

function formataTempo(v){
	let coor = (document.getElementById("barra").offsetWidth * v.getCurrentTime())/v.getDuration();
	if((v.getPlayerState() == 5) || (v.getPlayerState() == -1)) {
		let total = moment.utc(v.getDuration() * 1000);
		//$('#tempototal').text(total.format('mm:ss'));
	}
	if(v.getPlayerState() == 1) {
		let minutos = moment.utc(v.getCurrentTime() * 1000);
		//$('#duracao').text(minutos.format('mm:ss'));
		let total = moment.utc(v.getDuration() * 1000);
		//$('#tempototal').text(total.format('mm:ss'));
	}
	let max = v.getDuration(), value = v.getCurrentTime()

	tt.innerText = v.getDuration();
	v.a.parentElement.lastChild.querySelector("#barra_interno").style.width = Math.round(coor)+"px";
}

function myFunction(e) {
	let dura = videos[0].getDuration();
	let w = document.getElementById("barra").offsetWidth;
    let x = (dura * (e.offsetX + 1)) / w;
    let coor = x;
    // document.getElementById("barra_interno").style.width = parseInt(coor)+"px";
    // document.getElementById("alertmouse").innerHTML = "width: " + 
    // w + "px; max:" + dura + " time: " + coor + "Cursor: " + x;
    //console.log(parseInt(x));
    console.log(coor);
    videos[0].seekTo(coor);
    duracao(videos[0]);
}