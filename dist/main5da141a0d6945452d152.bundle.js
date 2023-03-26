/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVariables": () => (/* binding */ getVariables),
/* harmony export */   "setBGImage": () => (/* binding */ setBGImage),
/* harmony export */   "setDuration": () => (/* binding */ setDuration),
/* harmony export */   "setStopPlay": () => (/* binding */ setStopPlay)
/* harmony export */ });
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

function setDuration(duration) {
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

function setStopPlay(track, audio, config, duration, volumValue) {
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

function getVariables() {
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
        current: 0
    };
    return { summer, rainy, winter, volume, bg, duration, stopPlay };
}

function setBGImage(item, bg) {
    const button = item.closest("div");
    bg.style.backgroundImage = `url(${button.dataset.imageUrl})`;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlerOnEndedPlay": () => (/* binding */ handlerOnEndedPlay)
/* harmony export */ });
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./utils.js");



const { summer, rainy, winter, volume, bg, duration, stopPlay } =
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getVariables)();
summer.onclick = summerHandlerClick;
rainy.onclick = rainyHandlerClick;
winter.onclick = winterHandlerClick;
volume.oninput = handlerChangeVolume;
(0,_utils__WEBPACK_IMPORTED_MODULE_1__.setDuration)(duration);

const audio = new Audio();
audio.onended = handlerOnEndedPlay;
let volumValue = 50;

function handlerOnEndedPlay() {
    stopPlay.track = "";
    stopPlay.isPlay = true;
    stopPlay.begin = 0;
    stopPlay.end = 0;
    stopPlay.current = 0;
}

function summerHandlerClick({ target }) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setBGImage)(target, bg);
    audio.src = "../src/assets/sounds/summer.mp3";
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setStopPlay)("summer", audio, stopPlay, duration, volumValue);
}
function rainyHandlerClick({ target }) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setBGImage)(target, bg);
    audio.src = "../src/assets/sounds/rain.mp3";
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setStopPlay)("rain", audio, stopPlay, duration, volumValue);
}
function winterHandlerClick({ target }) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setBGImage)(target, bg);
    audio.src = "../src/assets/sounds/winter.mp3";
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setStopPlay)("winter", audio, stopPlay, duration, volumValue);
}

function handlerChangeVolume({ target }) {
    volumValue = target.value;
    audio.volume = volumValue / 100;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbjVkYTE0MWEwZDY5NDU0NTJkMTUyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrQ0FBK0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDs7Ozs7OztVQy9GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNnRDtBQUM3RTtBQUNBLFFBQVEsd0RBQXdEO0FBQ2hFLElBQUksb0RBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEMsSUFBSSxrREFBVTtBQUNkO0FBQ0EsSUFBSSxtREFBVztBQUNmO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckMsSUFBSSxrREFBVTtBQUNkO0FBQ0EsSUFBSSxtREFBVztBQUNmO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEMsSUFBSSxrREFBVTtBQUNkO0FBQ0EsSUFBSSxtREFBVztBQUNmO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2Nzcz83ZThjIiwid2VicGFjazovLy8uL3V0aWxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IElDT05fUEFVU0UgPSBcIi4uL3NyYy9hc3NldHMvaWNvbnMvcGF1c2Uuc3ZnXCI7XHJcblxyXG5mdW5jdGlvbiBzaG93SWNvblBhdXNlKGNvbmZpZykge1xyXG4gICAgY29uc3QgcGF1c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhdXNlXCIpO1xyXG5cclxuICAgIGlmIChjb25maWcuaXNQbGF5KSB7XHJcbiAgICAgICAgcGF1c2Uuc3JjID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF1c2Uuc3JjID0gSUNPTl9QQVVTRTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlVGltZVBsYXkoY29uZmlnLCBkdXJhdGlvbikge1xyXG4gICAgY29uc3QgeyBkdXJhdGlvblN1bW1lciwgZHVyYXRpb25SYWluLCBkdXJhdGlvbldpbnRlciB9ID0gZHVyYXRpb247XHJcblxyXG4gICAgY29uZmlnLmN1cnJlbnQgKz0gKGNvbmZpZy5lbmQgLSBjb25maWcuYmVnaW4pIC8gMTAwMDtcclxuXHJcbiAgICBpZiAoY29uZmlnLnRyYWNrID09PSBcInN1bW1lclwiKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5jdXJyZW50ID49IGR1cmF0aW9uU3VtbWVyKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5jdXJyZW50ID0gY29uZmlnLmN1cnJlbnQgLSBkdXJhdGlvblN1bW1lcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLnRyYWNrID09PSBcInJhaW5cIikge1xyXG4gICAgICAgIGlmIChjb25maWcuY3VycmVudCA+PSBkdXJhdGlvblN1bW1lcikge1xyXG4gICAgICAgICAgICBjb25maWcuY3VycmVudCA9IGNvbmZpZy5jdXJyZW50IC0gZHVyYXRpb25SYWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb25maWcudHJhY2sgPT09IFwid2ludGVyXCIpIHtcclxuICAgICAgICBpZiAoY29uZmlnLmN1cnJlbnQgPj0gZHVyYXRpb25TdW1tZXIpIHtcclxuICAgICAgICAgICAgY29uZmlnLmN1cnJlbnQgPSBjb25maWcuY3VycmVudCAtIGR1cmF0aW9uV2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldER1cmF0aW9uKGR1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBhdWRpbzEgPSBuZXcgQXVkaW8oXCIuLi9zcmMvYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzXCIpO1xyXG4gICAgY29uc3QgYXVkaW8yID0gbmV3IEF1ZGlvKFwiLi4vc3JjL2Fzc2V0cy9zb3VuZHMvcmFpbi5tcDNcIik7XHJcbiAgICBjb25zdCBhdWRpbzMgPSBuZXcgQXVkaW8oXCIuLi9zcmMvYXNzZXRzL3NvdW5kcy93aW50ZXIubXAzXCIpO1xyXG4gICAgYXVkaW8xLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgZHVyYXRpb24uZHVyYXRpb25TdW1tZXIgPSBhdWRpbzEuZHVyYXRpb247XHJcbiAgICB9O1xyXG4gICAgYXVkaW8yLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgZHVyYXRpb24uZHVyYXRpb25SYWluID0gYXVkaW8yLmR1cmF0aW9uO1xyXG4gICAgfTtcclxuICAgIGF1ZGlvMy5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGR1cmF0aW9uLmR1cmF0aW9uV2ludGVyID0gYXVkaW8zLmR1cmF0aW9uO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0b3BQbGF5KHRyYWNrLCBhdWRpbywgY29uZmlnLCBkdXJhdGlvbiwgdm9sdW1WYWx1ZSkge1xyXG4gICAgYXVkaW8udm9sdW1lID0gdm9sdW1WYWx1ZSAvIDEwMDtcclxuXHJcbiAgICBpZiAoY29uZmlnLnRyYWNrID09PSB0cmFjaykge1xyXG4gICAgICAgIGNvbmZpZy5pc1BsYXkgPSAhY29uZmlnLmlzUGxheTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uZmlnLnRyYWNrID0gdHJhY2s7XHJcbiAgICAgICAgY29uZmlnLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgIGNvbmZpZy5iZWdpbiA9IDA7XHJcbiAgICAgICAgY29uZmlnLmVuZCA9IDA7XHJcbiAgICAgICAgY29uZmlnLmlzUGxheSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5pc1BsYXkpIHtcclxuICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IGNvbmZpZy5jdXJyZW50O1xyXG4gICAgICAgIGNvbmZpZy5iZWdpbiA9IERhdGUubm93KCk7XHJcbiAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25maWcuZW5kID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBhdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIGNhbGN1bGF0ZVRpbWVQbGF5KGNvbmZpZywgZHVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJY29uUGF1c2UoY29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhYmxlcygpIHtcclxuICAgIGNvbnN0IHN1bW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VtbWVyXCIpO1xyXG4gICAgY29uc3QgcmFpbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhaW55XCIpO1xyXG4gICAgY29uc3Qgd2ludGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW50ZXJcIik7XHJcbiAgICBjb25zdCB2b2x1bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZvbHVtZVwiKTtcclxuICAgIGNvbnN0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZ1wiKTtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0geyBkdXJhdGlvblN1bW1lcjogMCwgZHVyYXRpb25SYWluOiAwLCBkdXJhdGlvbldpbnRlcjogMCB9O1xyXG4gICAgY29uc3Qgc3RvcFBsYXkgPSB7XHJcbiAgICAgICAgdHJhY2s6IFwiXCIsXHJcbiAgICAgICAgaXNQbGF5OiB0cnVlLFxyXG4gICAgICAgIGJlZ2luOiAwLFxyXG4gICAgICAgIGVuZDogMCxcclxuICAgICAgICBjdXJyZW50OiAwXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgc3VtbWVyLCByYWlueSwgd2ludGVyLCB2b2x1bWUsIGJnLCBkdXJhdGlvbiwgc3RvcFBsYXkgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEJHSW1hZ2UoaXRlbSwgYmcpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGl0ZW0uY2xvc2VzdChcImRpdlwiKTtcclxuICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtidXR0b24uZGF0YXNldC5pbWFnZVVybH0pYDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IHsgZ2V0VmFyaWFibGVzLCBzZXRCR0ltYWdlLCBzZXREdXJhdGlvbiwgc2V0U3RvcFBsYXkgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY29uc3QgeyBzdW1tZXIsIHJhaW55LCB3aW50ZXIsIHZvbHVtZSwgYmcsIGR1cmF0aW9uLCBzdG9wUGxheSB9ID1cclxuICAgIGdldFZhcmlhYmxlcygpO1xyXG5zdW1tZXIub25jbGljayA9IHN1bW1lckhhbmRsZXJDbGljaztcclxucmFpbnkub25jbGljayA9IHJhaW55SGFuZGxlckNsaWNrO1xyXG53aW50ZXIub25jbGljayA9IHdpbnRlckhhbmRsZXJDbGljaztcclxudm9sdW1lLm9uaW5wdXQgPSBoYW5kbGVyQ2hhbmdlVm9sdW1lO1xyXG5zZXREdXJhdGlvbihkdXJhdGlvbik7XHJcblxyXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xyXG5hdWRpby5vbmVuZGVkID0gaGFuZGxlck9uRW5kZWRQbGF5O1xyXG5sZXQgdm9sdW1WYWx1ZSA9IDUwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXJPbkVuZGVkUGxheSgpIHtcclxuICAgIHN0b3BQbGF5LnRyYWNrID0gXCJcIjtcclxuICAgIHN0b3BQbGF5LmlzUGxheSA9IHRydWU7XHJcbiAgICBzdG9wUGxheS5iZWdpbiA9IDA7XHJcbiAgICBzdG9wUGxheS5lbmQgPSAwO1xyXG4gICAgc3RvcFBsYXkuY3VycmVudCA9IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bW1lckhhbmRsZXJDbGljayh7IHRhcmdldCB9KSB7XHJcbiAgICBzZXRCR0ltYWdlKHRhcmdldCwgYmcpO1xyXG4gICAgYXVkaW8uc3JjID0gXCIuLi9zcmMvYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzXCI7XHJcbiAgICBzZXRTdG9wUGxheShcInN1bW1lclwiLCBhdWRpbywgc3RvcFBsYXksIGR1cmF0aW9uLCB2b2x1bVZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiByYWlueUhhbmRsZXJDbGljayh7IHRhcmdldCB9KSB7XHJcbiAgICBzZXRCR0ltYWdlKHRhcmdldCwgYmcpO1xyXG4gICAgYXVkaW8uc3JjID0gXCIuLi9zcmMvYXNzZXRzL3NvdW5kcy9yYWluLm1wM1wiO1xyXG4gICAgc2V0U3RvcFBsYXkoXCJyYWluXCIsIGF1ZGlvLCBzdG9wUGxheSwgZHVyYXRpb24sIHZvbHVtVmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIHdpbnRlckhhbmRsZXJDbGljayh7IHRhcmdldCB9KSB7XHJcbiAgICBzZXRCR0ltYWdlKHRhcmdldCwgYmcpO1xyXG4gICAgYXVkaW8uc3JjID0gXCIuLi9zcmMvYXNzZXRzL3NvdW5kcy93aW50ZXIubXAzXCI7XHJcbiAgICBzZXRTdG9wUGxheShcIndpbnRlclwiLCBhdWRpbywgc3RvcFBsYXksIGR1cmF0aW9uLCB2b2x1bVZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlckNoYW5nZVZvbHVtZSh7IHRhcmdldCB9KSB7XHJcbiAgICB2b2x1bVZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgYXVkaW8udm9sdW1lID0gdm9sdW1WYWx1ZSAvIDEwMDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=