for(var i=0;i<document.querySelectorAll("img").length;i++){
	document.querySelectorAll("img")[i].addEventListener("click",fun);
}
function fun()
{
	var ImageName=this.getAttribute("class");
	if(ImageName==="snare"){
		var audio=new Audio ("snare.mp3");
		audio.play();
	}
	else if(ImageName==="kick"){
		var audio=new Audio ("kick-bass.mp3");
		audio.play();
	}
	else if(ImageName==="tom1"){
		var audio=new Audio ("tom-1.mp3");
		audio.play();
	}
	else if(ImageName==="tom2"){
		var audio=new Audio ("tom-2.mp3");
		audio.play();
	}
	else if(ImageName==="tom3"){
		var audio=new Audio ("tom-3.mp3");
		audio.play();
	}
	else if(ImageName==="tom4"){
		var audio=new Audio ("tom-4.mp3");
		audio.play();
	}
	else if(ImageName==="crash"){
		var audio=new Audio ("crash.mp3");
		audio.play();
	}
}