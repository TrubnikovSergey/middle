const summer = document.querySelector(".summer");
const rainy = document.querySelector(".rainy");
const winter = document.querySelector(".winter");
const volume = document.querySelector(".volume");
const bg = document.querySelector(".bg");
const ICON_PAUSE = "../src/assets/icons/pause.svg";
let audio = new Audio();
audio.onended = handlerOnEndedPlay;
let volumValue = 50;
let durationSummer = 0;
let durationRain = 0;
let durationWinter = 0;
const stopPlay = {
  track: "",
  isPlay: true,
  begin: 0,
  end: 0,
  current: 0,
};

summer.onclick = summerHandlerClick;
rainy.onclick = rainyHandlerClick;
winter.onclick = winterHandlerClick;
volume.oninput = handlerChangeVolume;

function setDuration() {
  const audio1 = new Audio("../src/assets/sounds/summer.mp3");
  const audio2 = new Audio("../src/assets/sounds/rain.mp3");
  const audio3 = new Audio("../src/assets/sounds/winter.mp3");
  audio1.onloadedmetadata = () => {
    durationSummer = audio1.duration;
  };
  audio2.onloadedmetadata = () => {
    durationRain = audio2.duration;
  };
  audio3.onloadedmetadata = () => {
    durationWinter = audio3.duration;
  };
}

setDuration();

function handlerOnEndedPlay() {
  stopPlay.track = "";
  stopPlay.isPlay = true;
  stopPlay.begin = 0;
  stopPlay.end = 0;
  stopPlay.current = 0;
}

function setBGImage(item) {
  const button = item.closest("div");
  bg.style.backgroundImage = `url(${button.dataset.imageUrl})`;
}

function setStopPlay(track) {
  audio.volume = volumValue / 100;

  if (stopPlay.track === track) {
    stopPlay.isPlay = !stopPlay.isPlay;
  } else {
    stopPlay.track = track;
    stopPlay.current = 0;
    stopPlay.begin = 0;
    stopPlay.end = 0;
    stopPlay.isPlay = true;
  }

  if (stopPlay.isPlay) {
    audio.currentTime = stopPlay.current;
    stopPlay.begin = Date.now();
    audio.play();
  } else {
    stopPlay.end = Date.now();
    audio.pause();
    calculateTimePlay();
  }

  showIconPause();
}

function showIconPause() {
  const pause = document.querySelector(".pause");

  if (stopPlay.isPlay) {
    pause.src = "";
  } else {
    pause.src = ICON_PAUSE;
  }
}

function calculateTimePlay() {
  stopPlay.current += (stopPlay.end - stopPlay.begin) / 1000;

  if (stopPlay.track === "summer") {
    if (stopPlay.current >= durationSummer) {
      stopPlay.current = stopPlay.current - durationSummer;
    }
  }
  if (stopPlay.track === "rain") {
    if (stopPlay.current >= durationSummer) {
      stopPlay.current = stopPlay.current - durationRain;
    }
  }
  if (stopPlay.track === "winter") {
    if (stopPlay.current >= durationSummer) {
      stopPlay.current = stopPlay.current - durationWinter;
    }
  }
}

function summerHandlerClick({ target }) {
  setBGImage(target);

  audio.src = "../src/assets/sounds/summer.mp3";

  setStopPlay("summer");
}
function rainyHandlerClick({ target }) {
  setBGImage(target);
  audio.src = "../src/assets/sounds/rain.mp3";
  setStopPlay("rain");
}
function winterHandlerClick({ target }) {
  setBGImage(target);
  audio.src = "../src/assets/sounds/winter.mp3";
  setStopPlay("winter");
}

function handlerChangeVolume(e) {
  volumValue = e.target.value;
  audio.volume = volumValue / 100;
}
