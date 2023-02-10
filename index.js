let tens = 0;
let sec = 0;
let min = 0;

let timer = false;

// run this function if start button clicked
function startTimer() {
    timer = true;
    stopWatch()
}

// run this function if stop button clicked
function stopTimer() {
    timer = false;
}

// run this function if reset button clicked
function resetTimer() {   
    timer = false;

    tens = 0;
    sec = 0;
    min = 0;

    document.getElementById("tens").innerHTML = "00"; /* to display in double digits when timer get reset */
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
}

// 
function stopWatch() {
    if (timer == true) {
        tens = tens + 1;
        
        if(tens == 99) {
            sec = sec + 1;
            tens = 0;

            if(sec == 59) {
                min = min + 1;
                sec = 0;
            }
        }
      
        let tensString = tens;   /* to display in double digits when tens, sec & min are less than 10 */
        let secString = sec;
        let minString = min;

        if(tens < 10) {
            tensString = "0" + tensString;
        }
        if(sec < 10) {
            secString = "0" + secString;
        }
        if(min < 10) {
            minString = "0" + minString;
        } 

        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("tens").innerHTML = tensString;

        setTimeout("stopWatch()", 10) /* run the function stopwatch in after every 10 milli seconds */
    }
}