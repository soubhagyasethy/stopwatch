let tens = 0;
let sec = 0;
let min = 0;

let timer = null;

// for start
function startTimer() {
  /*clearing the interval here will not trigger the function repeatedly if we press start button again & again */
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 10);
}

// for stop
function stopTimer() {
  clearInterval(timer);
}

// for reset
function resetTimer() {
  clearInterval(timer);
  tens = 0;
  sec = 0;
  min = 0;
  /* to display in double digits when timer get reset */
  document.getElementById("tens").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
}

function stopWatch() {
  tens++;
  if (tens == 99) {
    tens = 0;
    sec++;
    if (sec == 59) {
      sec = 0;
      min++;
    }
  }
  /* to display in double digits when tens, sec & min are less than 10 */
  let tensString = tens < 10 ? "0" + tens : tens;
  let secString = sec < 10 ? "0" + sec : sec;
  let minString = min < 10 ? "0" + min : min;

  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
  document.getElementById("tens").innerHTML = tensString;
}
