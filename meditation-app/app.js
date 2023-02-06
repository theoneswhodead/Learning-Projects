const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video =document.querySelector('.vid-container video');

    const sounds = document.querySelectorAll('.sound-picker button');
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select');

    //get the length od the outline

    const outlineLength = outline.getTotalLength();
    //Duration

    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
    //pick difrent soinds

    sounds.forEach(sound => {
      sound.addEventListener('click', function() {
        song.src=this.getAttribute('data-sound');
        video.src = this.getAttribute('data-video');
        checkPlaying(song);
      })
    })

    //play sound

    play.addEventListener('click', () => {
    //  song.play();
      checkPlaying(song);
    });

    // select

    timeSelect.forEach(option => {
      option.addEventListener("click", function() {
        fakeDuration = this.getAttribute("data-time");
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
          fakeDuration % 60
        )}`;
      });
    });


    //stop and play
    const checkPlaying = song => {
      if(song.paused) {
        song.play();
        video.play();
        play.src ='./svg/pause.svg';
      }else {
        song.pause();
        video.pause();
        play.src='./svg/play.svg';
      }
    }

    //we can animate circle

    song.ontimeupdate = function() {
      let currentTime = song.currentTime;
      let elapsed = fakeDuration - currentTime;
      let seconds = Math.floor(elapsed % 60);
      let minutes = Math.floor(elapsed / 60);
      timeDisplay.textContent = `${minutes}:${seconds}`;
      let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
      outline.style.strokeDashoffset = progress;
    
      if (currentTime >= fakeDuration) {
        song.pause();
        song.currentTime = 0;
        play.src = "./svg/play.svg";
        video.pause();
      }
    };
}


app();