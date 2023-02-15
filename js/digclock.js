//1.Creat a time data function
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var mhr = d.getHours(); //Get millitary hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM

    //Get current zone challenge
    var utchr = d.getUTCHours (); //Get current Greenwich Mean Time (GMT)*/
    var timeDiff = mhr - utchr; //To store time difference between GMT hour and Local hour
    //var adjTimeDiff = Math.abs(timeDiff) ; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT,MT,CT,ET)*/
    var timeZoneDiff = mhr - utchr; //Calculate GMT hour difference
   
    //Allow clock to show +-GMT hours
    if (timeZoneDiff < -12) {
        timeZoneDiff = "+" + (24 - utchr + mhr);
    } else if (timeZoneDiff > 12 ) {
        timeZoneDiff = "-" + (24 - mhr + utchr);
    } else if (timeZoneDiff > 0) {
        timeZoneDiff = "+" + timeZoneDiff;
    } 
    else {
        timeZoneDiff = timeZoneDiff;
    }

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }
    //Dtermin AM or PM string
    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr = hr - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    
    //Determin timezone
    if (timeDiff == -6 || timeDiff == 18) {
        timeZone = "CT"; timeZoneDiff = "";
    } else if (timeDiff == -5 || timeDiff == 19) {
        timeZone = "ET"; timeZoneDiff = "";
    } else if (timeDiff == -7 || timeDiff == 17) {
        timeZone = "MT"; timeZoneDiff = ""
    } else if (timeDiff == -8 || timeDiff == 16) {
        timeZone = "PT"; timeZoneDiff = ""
    } else {
        timeZone = "GMT";
    }

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone + timeZoneDiff;
    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time;
    //Run time data function every 1 second
    setInterval (currentTime, 1000);
}
//Initial run of time data function
currentTime();