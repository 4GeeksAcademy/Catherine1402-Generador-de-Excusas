/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = excuseGenerator();
};

function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function random(array) {
    let indice = Math.floor(Math.random() * array.length);
    return array[indice];
  }

  let exc =
    random(who) +
    " " +
    random(action) +
    " " +
    random(what) +
    " " +
    random(when);
  return exc;
}
