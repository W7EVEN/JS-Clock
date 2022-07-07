// Analog Clock

let displayedHours = document.querySelector("div#hours");
let displayedMinutes = document.querySelector("div#minutes");
let displayedSeconds = document.querySelector("div#seconds");

setInterval(() => {
  let day = new Date();
  let localHour = day.getHours() * 30;
  let localMinute = day.getMinutes() * 6;
  let localSecond = day.getSeconds() * 6;

  displayedHours.style.transform = `rotateZ(${
    localHour + localMinute / 12
  }deg)`;
  displayedMinutes.style.transform = `rotateZ(${localMinute}deg)`;
  displayedSeconds.style.transform = `rotateZ(${localSecond}deg)`;

  //End Analog Clock

  //Digital Clock

  let digitalHours = document.querySelector("div#container-time-hours");
  let digitalMinutes = document.querySelector("div#container-time-minutes");
  let digitalSeconds = document.querySelector("div#container-time-seconds");
  let ampm = document.querySelector("div#container-time-ampm");

  let localHours = new Date().getHours();
  let localMinutes = new Date().getMinutes();
  let localSeconds = new Date().getSeconds();

  let am = localHours >= 12 ? "PM" : "AM";

  if (localHours > 12) {
    localHours = localHours - 12;
  }

  localHours = localHours < 10 ? "0" + localHours : localHours;
  localMinutes = localMinutes < 10 ? "0" + localMinutes : localMinutes;
  localSeconds = localSeconds < 10 ? "0" + localSeconds : localSeconds;

  digitalHours.innerHTML = localHours;
  digitalMinutes.innerHTML = localMinutes;
  digitalSeconds.innerHTML = localSeconds;
  ampm.innerHTML = am;

  //End Digital Clock
});
