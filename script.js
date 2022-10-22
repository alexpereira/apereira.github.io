let elapsedSeconds = 0;
let previousAudio;

$('.pad').click(function () {
  let startTime;
  const button_color = $(this).data('color');
  const button_audio = $(this).data('audio');
  const audio = document.getElementById(button_audio);
  
  // half second before the start
  const currentTime = (elapsedSeconds - 2) > 0 ? (elapsedSeconds - 2) : 0;
  console.log('currentTime: ', currentTime);
  console.log('elapsedSeconds: ', elapsedSeconds);
  
  console.log('audio.duration: ', audio.duration);
  console.log('previousAudio.duration: ', previousAudio ? previousAudio.duration : 0);

  $(this).effect('highlight', {
    color: button_color
  }, 160);


  if (!previousAudio || (audio.duration != previousAudio.duration)) {
    startTime = Date.now();
    


    const interval = setInterval(function() {
      elapsedSeconds = (Date.now() - startTime) / 1000;
      console.log('elapsedSeconds: ', elapsedSeconds);
    }, 100);

    setTimeout(function( ) { 
      clearInterval( interval ); 
      elapsedSeconds = 0;
      previousAudio = null;
    }, audio.duration * 1000);
  } else {
    audio.currentTime = currentTime;
    // audio.pause();
  }

  previousAudio = audio;
  audio.play();
});


