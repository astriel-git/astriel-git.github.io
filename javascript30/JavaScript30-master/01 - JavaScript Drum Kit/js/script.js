// 0. Pre-declared variables
let key;
let audio;

// 1. Add "playing" class to the drum keys when there is a keydown event

document.addEventListener("keydown", function (event) {
  // the numerical key code of the pressed key is assigned to the key variable
  key = event.keyCode;
  // the audio of the div with the corresponding (keycode) data-key label is asigned to the audio variable
  audio = document.querySelector(`audio[data-key='${key}']`);
  // on the keydown event the ".playing" class is added to div with the correspnding keycode
  const keyElement = document
    .querySelector(`div[data-key='${key}']`)
    .classList.add("playing");
  // audio.currentTime allows for the audio to replay without delay upon a new keypress
  audio.currentTime = 0;
  // .play() plays the sound that corresponds to the sound source asigned to the audio variable above
  audio.play();
});

// 2. Remove "playing" class from the drum keys immedeatly when the key is released
// during a "keyup" event do the following
document.addEventListener("keyup", function () {
  // remove the "playing" class from the specified div
  document.querySelector(`div[data-key='${key}']`).classList.remove("playing");
});
