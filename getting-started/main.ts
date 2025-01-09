console.log("Hello, Vite!");

import './style.css'

// V4
import { format } from "date-fns";

function getElement<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

const button = getElement<HTMLButtonElement>("button");
const info = getElement<HTMLDivElement>("info");

if (button && info) {
  button.addEventListener("click", () => {
    const currentTime = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    info.innerText = `Clicked at ${currentTime}`;
  });
}

// V3
// function getElement<T extends HTMLElement>(id: string): T | null {
//   return document.getElementById(id) as T | null;
// }

// const button = getElement<HTMLButtonElement>("button");
// const info = getElement<HTMLDivElement>("info");

// if (button && info) {
//   button.addEventListener("click", () => {
//     const currentTime = new Date().toLocaleTimeString();
//     info.innerText = `Clicked at ${currentTime}`;
//   });
// }

// V2
// const button = document.getElementById("button") as HTMLButtonElement | null;
// const info = document.getElementById("info") as HTMLDivElement | null;

// if (button && info) {
//   button.addEventListener("click", () => {
//     const currentTime = new Date().toLocaleTimeString();
//     info.innerText = `Clicked at ${currentTime}`;
//   });
// }

// V1
// const button = document.getElementById("button");
// const info = document.getElementById("info");

// if (button && info) {
//   button.addEventListener("click", () => {
//     const currentTime = new Date().toLocaleTimeString();
//     info.innerText = `Clicked at ${currentTime}`;
//   });
// }


