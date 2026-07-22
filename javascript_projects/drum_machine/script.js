const drumMachine = document.getElementById("drum-machine");
const padBank = document.getElementById("pad-bank");
const display = document.getElementById("display");
const drumPad = document.querySelectorAll(".drum-pad");


drumPad.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audEl = pad.querySelector("audio");
    audEl.currentTime = 0;
    audEl.play();
    const part = audEl.src.split("/");
    display.textContent = part[part.length - 1];
  } )
})

document.addEventListener("keydown", (event) => {drumPad.forEach((pad) => {
  const audEl = pad.querySelector("audio");
  if (audEl.id === event.key.toUpperCase()) {
    audEl.currentTime = 0;
    audEl.play()
    const part = audEl.src.split("/");
    display.textContent = part[part.length - 1];
  }
})})
