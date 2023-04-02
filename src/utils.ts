// const ICON_PAUSE = "../src/assets/icons/pause.svg";
import configJSON from "../config.json";

interface Config {
  track: string;
  isPlay: boolean;
  begin: number;
  end: number;
  current: number;
}

interface Duration {
  durationSummer: number;
  durationRain: number;
  durationWinter: number;
}

function showIconPause(config: Config) {
  const pause = document.querySelector(".pause") as HTMLImageElement;

  pause.src = config.isPlay ? "" : configJSON.ICON_PAUSE;
}

function calculateTimePlay(config: Config, duration: Duration) {
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

export function setDuration(duration: Duration) {
  const audio1: HTMLAudioElement = new Audio(configJSON.sound_summer);
  const audio2: HTMLAudioElement = new Audio(configJSON.sound_rain);
  const audio3: HTMLAudioElement = new Audio(configJSON.sound_winter);
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

export function setStopPlay(
  track: string,
  audio: HTMLAudioElement,
  config: Config,
  duration: Duration,
  volumValue: number
) {
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
  const summer = document.querySelector(".summer") as HTMLDivElement;
  const rainy = document.querySelector(".rainy") as HTMLDivElement;
  const winter = document.querySelector(".winter") as HTMLDivElement;
  const volume = document.querySelector("#volumeInput") as HTMLInputElement;

  const bg = document.querySelector(".bg") as HTMLDivElement;
  const duration: {
    durationSummer: number;
    durationRain: number;
    durationWinter: number;
  } = { durationSummer: 0, durationRain: 0, durationWinter: 0 };
  const stopPlay: {
    track: string;
    isPlay: boolean;
    begin: number;
    end: number;
    current: number;
  } = {
    track: "",
    isPlay: true,
    begin: 0,
    end: 0,
    current: 0
  };
  return { summer, rainy, winter, volume, bg, duration, stopPlay };
}

export function setBGImage(item: GlobalEventHandlers, bg: HTMLDivElement) {
  const button = (<HTMLElement>item).closest("div") as HTMLDivElement;
  bg.style.backgroundImage = `url(${button.dataset.imageUrl})`;
}
