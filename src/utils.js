const ICON_PAUSE = "../src/assets/icons/pause.svg";

function showIconPause(config) {
  const pause = document.querySelector(".pause");

  if (config.isPlay) {
    pause.src = "";
  } else {
    pause.src = ICON_PAUSE;
  }
}

function calculateTimePlay(config, duration) {
  const { durationSummer, durationRain, durationWinter } = duration;

  config.current += (config.end - config.begin) / 1000;

  if (config.track === "summer") {
    if (config.current >= durationSummer) {
      config.current = config.current - durationSummer;
    }
  }
  if (config.track === "rain") {
    if (config.current >= durationSummer) {
      config.current = config.current - durationRain;
    }
  }
  if (config.track === "winter") {
    if (config.current >= durationSummer) {
      config.current = config.current - durationWinter;
    }
  }
}

export function setDuration(duration) {
  const audio1 = new Audio("../src/assets/sounds/summer.mp3");
  const audio2 = new Audio("../src/assets/sounds/rain.mp3");
  const audio3 = new Audio("../src/assets/sounds/winter.mp3");
  audio1.onloadedmetadata = () => {
    duration.durationSummer = audio1.duration;
  };
  audio2.onloadedmetadata = () => {
    duration.durationRain = audio2.duration;
  };
  audio3.onloadedmetadata = () => {
    duration.durationWinter = audio3.duration;
  };
}

export function setStopPlay(track, audio, config, duration, volumValue) {
  audio.volume = volumValue / 100;

  if (config.track === track) {
    config.isPlay = !config.isPlay;
  } else {
    config.track = track;
    config.current = 0;
    config.begin = 0;
    config.end = 0;
    config.isPlay = true;
  }

  if (config.isPlay) {
    audio.currentTime = config.current;
    config.begin = Date.now();
    audio.play();
  } else {
    config.end = Date.now();
    audio.pause();
    calculateTimePlay(config, duration);
  }

  showIconPause(config);
}

export function getVariables() {
  const summer = document.querySelector(".summer");
  const rainy = document.querySelector(".rainy");
  const winter = document.querySelector(".winter");
  const volume = document.querySelector(".volume");
  const bg = document.querySelector(".bg");
  const duration = { durationSummer: 0, durationRain: 0, durationWinter: 0 };
  const stopPlay = {
    track: "",
    isPlay: true,
    begin: 0,
    end: 0,
    current: 0,
  };
  return { summer, rainy, winter, volume, bg, duration, stopPlay };
}

export function handlerOnEndedPlay() {
  stopPlay.track = "";
  stopPlay.isPlay = true;
  stopPlay.begin = 0;
  stopPlay.end = 0;
  stopPlay.current = 0;
}

export function setBGImage(item, bg) {
  const button = item.closest("div");
  bg.style.backgroundImage = `url(${button.dataset.imageUrl})`;
}
