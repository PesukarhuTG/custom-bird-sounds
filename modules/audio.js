function audioPlayer() {
  const playItems = document.querySelectorAll('.navigation__item, .icon-logo');
  const audio = new Audio();
  const mainImage = document.querySelector('.main');
  const iconPlay = document.querySelector('.icon-play-set');
  const playButton = document.querySelector('.play-button');
  let isPlay = false;
  let currentSound;

  function playAudio(sound) {
    audio.src = `assets/audio/${sound}.mp3`;
    audio.currentTime = 0;
    audio.play();
  }

  function changeImage(sound) {
    mainImage.style.cssText = `
      background: url("./assets/img/${sound}.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center 0;
      `;
  }

  function changeIconPlay(status) {
    iconPlay.setAttribute('href', `assets/svg/sprite.svg#${status}`);
  }

  function pauseAudio() {
    audio.pause();
  }

  playItems.forEach(item => {
    item.addEventListener('click', e => {
      let target = e.target.closest('[data-sound]');

      playItems.forEach(elem => {
        elem.classList.remove('navigation__item_active');
      })

      target.classList.add('navigation__item_active');
      currentSound = target.dataset.sound;
      playAudio(currentSound); //play sound
      changeImage(currentSound); //show image
      changeIconPlay('icon-pause'); //set icon || (we can stop)
      isPlay = true; //sound is ON
    })
  });

  playButton.addEventListener('click', () => {
    if (isPlay) {
      pauseAudio();
      changeIconPlay('icon-play');
      isPlay = false;
    } else {
      playAudio(currentSound || 'forest'); //if first time, 'forest' as default
      changeIconPlay('icon-pause');
      isPlay = true;
    }
  });
}

export default audioPlayer;