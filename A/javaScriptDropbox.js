
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

  

  function go_2_S3(){
    window.location.href='A_S3.html'  
}

function show(){
   document.getElementById("myvideo").style.visibility = "visible";
  // document.getElementById('myVideo').addEventListener('ended',go2quote,false);
 
   
}
function startVideo(){
  
  show();
  openFullscreen();
}


function go_2_S2(){
  window.location.href='A_S2.html'  
}
function go_2_S4(){
  window.location.href='A_S4.html'  
}