import "bootstrap";
import "./style.css";
window.onload = function () {
  // Random excuse generator
  function getRandomExcuse() {
    const who = [
      "The dog",
      "My grandma",
      "The mailman",
      "My bird",
      "My neighbor",
      "My little brother",
      "The cat",
      "The teacher"
    ];

    const action = [
      "ate",
      "peed on",
      "crushed",
      "broke",
      "stole",
      "hid",
      "lost",
      "burned"
    ];

    const what = [
      "my homework",
      "my phone",
      "the car",
      "my shoes",
      "the TV remote",
      "my backpack",
      "my lunch",
      "the WiFi router"
    ];

    const when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying",
      "during the exam",
      "at midnight",
      "while I was in the shower"
    ];

    const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    return `${pick(who)} ${pick(action)} ${pick(what)} ${pick(when)}.`;
  }

  // Attach event listener
  document.querySelector("#excuse-btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerText = getRandomExcuse();
  });
  document.querySelector("#excuse").innerText = getRandomExcuse();

}