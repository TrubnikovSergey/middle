import "./styles/index.scss";
import configJSON from "../config.json";
import { getVariables, setBGImage, setDuration, setStopPlay } from "./utils";

const { summer, rainy, winter, volume, bg, duration, stopPlay } =
  getVariables();
summer.onclick = summerHandlerClick;
rainy.onclick = rainyHandlerClick;
winter.onclick = winterHandlerClick;
volume.oninput = handlerChangeVolume;
setDuration(duration);

const audio = new Audio();
audio.onended = handlerOnEndedPlay;
let volumValue = 50;

export function handlerOnEndedPlay() {
  stopPlay.track = "";
  stopPlay.isPlay = true;
  stopPlay.begin = 0;
  stopPlay.end = 0;
  stopPlay.current = 0;
}

function summerHandlerClick({ target }) {
  setBGImage(target, bg);
  audio.src = configJSON.sound_summer;
  setStopPlay("summer", audio, stopPlay, duration, volumValue);
}
function rainyHandlerClick({ target }) {
  setBGImage(target, bg);
  audio.src = configJSON.sound_rain;
  setStopPlay("rain", audio, stopPlay, duration, volumValue);
}
function winterHandlerClick({ target }) {
  setBGImage(target, bg);
  audio.src = configJSON.sound_winter;
  setStopPlay("winter", audio, stopPlay, duration, volumValue);
}

function handlerChangeVolume({ target }) {
  volumValue = target.value;
  audio.volume = volumValue / 100;
}
