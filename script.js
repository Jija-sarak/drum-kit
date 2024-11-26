const instruments = document.querySelectorAll('.items');
const keyToSoundMap = {
  'W': './audio/tr707-crash-cymbal-241376.mp3',
  'A': './audio/open-hi-hat-37514.mp3',
  'S': './audio/soft-closed-hi-hat_F_major.wav',
  'D': './audio/snare-drum.wav',
  'J': './audio/bass-drum-kick_C.wav',
  'K': './audio/rock-rack-tom-1.wav',
  'L': './audio/drum-tom-2_1bpm_E_minor.wav',
  'O': './audio/floor-tom-107404.mp3',
  'I': './audio/long-ride-cymbal-94674.mp3'
}

function soundPlay(soundFile){
  const audio = new Audio(soundFile);
      audio.play();
}

instruments.forEach(
  (instrument) => {
    instrument.addEventListener('click', () =>{
      const soundFile = instrument.getAttribute('data-sound');
      soundPlay(soundFile);
    })
  }
);

document.addEventListener('keydown', (e) => {
  const keyPressed = e.key.toUpperCase();

  if(keyToSoundMap[keyPressed]){
    soundPlay(keyToSoundMap[keyPressed]);
  }else{
    return alert('wrong key');
  }
  
});