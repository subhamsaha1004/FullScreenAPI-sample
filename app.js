function launchFullScreen(element){
	if(element.requestFullScreen){
		element.requestFullScreen();
	} 
	if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} 
	if(element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	}
}

function cancelFullScreen(){
	if(document.cancelFullScreen){
		document.cancelFullScreen();
	} 
	if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} 
	if(document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen();
	}
}

document.querySelector('#docFS').addEventListener('click', function(e){
	launchFullScreen(document.documentElement);
}, false);

document.querySelector('#imgFS').addEventListener('click', function(e){
	launchFullScreen(document.querySelector('.image'));
}, false);

document.querySelector('#cancelFS').addEventListener('click', function(e){
	cancelFullScreen();
}, false);

var status = document.querySelector('#status');
document.addEventListener('webkitfullscreenchange', function(e) {
	var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
	var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;

	status.innerHTML += '<p>fullscreenElement: ' + fullscreenElement + '. fullscreenEnabled: ' + fullscreenEnabled + '. ' + document.webkitCurrentFullScreenElement + '. ' + document.webkitIsFullScreen + '.' + document.webkitExitFullScreen + '.' + document.webkitFullScreenKeyboardInputAllowed + '</p>';
}, false);