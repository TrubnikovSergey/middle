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

const audio: HTMLAudioElement = new Audio();
audio.onended = handlerOnEndedPlay;
let volumValue: number = 50;

export function handlerOnEndedPlay(): void {
  stopPlay.track = "";
  stopPlay.isPlay = true;
  stopPlay.begin = 0;
  stopPlay.end = 0;
  stopPlay.current = 0;
}

function summerHandlerClick(this: GlobalEventHandlers, e: Event): any {
  setBGImage(this, bg);
  audio.src = configJSON.sound_summer;
  setStopPlay("summer", audio, stopPlay, duration, volumValue);
}

function rainyHandlerClick(this: GlobalEventHandlers, e: Event): any {
  setBGImage(this, bg);
  audio.src = configJSON.sound_rain;
  setStopPlay("rain", audio, stopPlay, duration, volumValue);
}
function winterHandlerClick(this: GlobalEventHandlers, e: Event): any {
  setBGImage(this, bg);
  audio.src = configJSON.sound_winter;
  setStopPlay("winter", audio, stopPlay, duration, volumValue);
}

function handlerChangeVolume(this: GlobalEventHandlers, e: Event): any {
  volumValue = Number((this as HTMLInputElement).value);
  audio.volume = volumValue / 100;
}
