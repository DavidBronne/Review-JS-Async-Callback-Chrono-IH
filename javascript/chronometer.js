// Constructor
function Chronometer() {
    // let fixThis = this;
    this.currentTime = 0,
    this.intervalId = 0,

    this.currentMilli = 0,
    this.milliIntervalId = 0,

    this.settedSec = 0,
    this.settedMin = 0,
    this.settedMilli = 0
}

Chronometer.prototype.startClick = function () {
    
    this.intervalId = setInterval( () => {
        this.currentTime++
        this.setTime();
        printTime(); 
    }, 1000);

    this.milliIntervalId = setInterval( () => {
        if (this.currentMilli === 99) {
            this.currentMilli = 0;
        } else {
            this.currentMilli++;
            this.setMilliseconds();
            printMilliseconds();
        }   
    }, 10)
};

Chronometer.prototype.setMinutes = function () {
 const minute = Math.floor(this.currentTime / 60 );
 return minute;
};

Chronometer.prototype.setSeconds = function () {
  const second = this.currentTime % 60;
  return second;
};

Chronometer.prototype.twoDigitsNumber = function (numberToFix) {
  if (numberToFix < 10) {
      return `0${numberToFix}`
  } else {
      return `${numberToFix}`
  }
};

Chronometer.prototype.setTime = function () {
    // const settedTime = [];
    // settedTime[0] = this.twoDigitsNumber(this.setSeconds());
    // settedTime[1] = this.twoDigitsNumber(this.setMinutes());
    // settedTime[2] = this.twoDigitsNumber(this.setMilliseconds());
    // console.log('settedTime', settedTime)
    // return settedTime;
        this.settedSec = this.twoDigitsNumber(this.setSeconds());
        this.settedMin = this.twoDigitsNumber(this.setMinutes());
        this.settedMilli = this.twoDigitsNumber(this.setMilliseconds());
        
};

Chronometer.prototype.setMilliseconds = function () {
    const milliSec = this.currentMilli;
    return milliSec;
};

Chronometer.prototype.stopClick = function () {
    
    clearInterval(this.milliIntervalId);
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.currentMilli = 0;
    printTime();
    printMilliseconds();
};

Chronometer.prototype.splitClick = function () {
    printSplit()
};
