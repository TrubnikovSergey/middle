import "./styles/index.css";
import { getVariables, handlerOnEndedPlay, setBGImage, setDuration, setStopPlay } from "./utils";

const { summer, rainy, winter, volume, bg, duration, stopPlay } = getVariables();
summer.onclick = summerHandlerClick;
rainy.onclick = rainyHandlerClick;
winter.onclick = winterHandlerClick;
volume.oninput = handlerChangeVolume;
setDuration(duration);

let audio = new Audio();
audio.onended = handlerOnEndedPlay;
let volumValue = 50;

function summerHandlerClick({ target }) {
  setBGImage(target, bg);
  audio.src = "../src/assets/sounds/summer.mp3";
  setStopPlay("summer", audio, stopPlay, duration, volumValue);
}
function rainyHandlerClick({ target }) {
  setBGImage(target, bg);
  audio.src = "../src/assets/sounds/rain.mp3";
  setStopPlay("rain", audio, stopPlay, duration, volumValue);
}
function winterHandlerClick({ target }) {
  setBGImage(target, bg);
  audio.src = "../src/assets/sounds/winter.mp3";
  setStopPlay("winter", audio, stopPlay, duration, volumValue);
}

function handlerChangeVolume({ target }) {
  volumValue = target.value;
  audio.volume = volumValue / 100;
}
