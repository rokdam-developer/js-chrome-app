const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (hours > 12) {
    const oneHours = String(parseInt(hours) - 12).padStart(2, "0");
    clock.innerText = `PM. ${oneHours} : ${minutes} : ${seconds}`;
  } else {
    clock.innerText = `AM. ${hours} : ${minutes} : ${seconds}`;
  }
}

getClock();
setInterval(getClock, 1000);
