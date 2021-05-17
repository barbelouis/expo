var $ = document.querySelector.bind(document);

 
 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player, iframe;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
    playerVars: { 'autoplay': 0, 'controls': 1 },
     height: '360',
     width: '640',
     videoId: 'Pvig3OZe2nc',
     
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   //event.target.playVideo();
   iframe = $('#player');
   setupListener();
   //event.target.playFullscreen(); 
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.ENDED) {

    go2quote();
  }
   
 }
 function stopVideo() {
   player.stopVideo();
 }


 function setupListener (){
    $('button').addEventListener('click', playFullscreen);
    }

 function playFullscreen (){
    player.playVideo();//won't work on mobile
    
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }
  }
  

  function go2quote(){
    window.location.href='quote.html'
}

function show(){
   document.getElementById("player").style.visibility = "visible";
   
}


