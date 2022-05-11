const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const minutes = chronometer.getMinutes();
  const seconds = chronometer.getSeconds();
  //console.log(minutes)
  console.log("seconds", seconds)
secUniElement.innerHTML = seconds
}

function printMinutes() {
  
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => { 
  if (btnLeftElement.innerHTML === "START") {
    btnLeftElement.innerHTML = "STOP" ;
    btnLeftElement.className = "btn stop"
    
    btnRightElement.innerHTML = "SPLIT"
    btnRightElement.className = "btn split"

chronometer.start(printTime)



    } else {
      btnLeftElement.innerHTML = "START";
      btnLeftElement.className = "btn start"

      btnRightElement.innerHTML = "RESET";
      btnRightElement.className = "btn reset"

chronometer.stop()

}
  console.log("clickLeft")

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === "RESET" &&  btnLeftElement.innerHTML === "STOP") {
    btnRightElement.innerHTML = "SPLIT"
  } else {
    btnRightElement.innerHTML = "RESET"
  }

  console.log("clickRight")
});
