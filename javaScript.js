
function openFullscreen() {
  var elem = document.getElementById("myvideo");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  elem.play();
  hideVideoControls();
}


function hideVideoControls(){
  var video = document.getElementById('myvideo');
  video.controls = 0;
  }


function show(){
   document.getElementById("myvideo").style.visibility = "visible";
  // document.getElementById('myVideo').addEventListener('ended',go2quote,false);
 
   
}
function startVideo(){
  
  show();
  openFullscreen();
}
