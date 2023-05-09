"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const getData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const respons = yield fetch(url);
    return respons;
});
getData(COMMENTS_URL)
    .then((resp) => resp.json())
    .then((data) => {
    for (let i = 0; i < data.length; i++) {
        const { id, email } = data[i];
        console.log(`ID: ${id}, Email: ${email}`);
    }
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
