var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

let minutes;
let secondes;
let milliSec;

function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minutes = chronometer.settedMin;
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    secondes = chronometer.settedSec;
    secDec.innerHTML = secondes[0];
    secUni.innerHTML = secondes[1];
}

function printMilliseconds() {
    milliSec = chronometer.settedMilli;
    milDec.innerHTML = milliSec[0];
    milUni.innerHTML = milliSec[1];
}

function printSplit() {
    console.log('printSplit', printSplit);
    const splitLi = `<li> ${minutes}:${secondes}:${milliSec} </li>`
    document.getElementById('splits').innerHTML += splitLi;
}

function clearSplits() {
    console.log('clearSplits', clearSplits);
    chronometer.currentTime = 0;
    printTime();
    document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
       
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = 'START';
}

function setResetBtn() {
    btnRight.className = 'btn reset';
    btnRight.innerHTML = 'RESET';

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
    if ( btnLeft.innerHTML == 'START' ) {
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
    } else {   
        
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if ( btnRight.innerHTML == 'SPLIT') {
        printSplit();
    } else {
        clearSplits();
    }
});
