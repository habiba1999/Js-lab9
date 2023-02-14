var timerContainer = document.getElementById("digitalwatch");
var timer = document.getElementById("watch");
var days = document.querySelectorAll(".day");
var paragraph = document.getElementsByClassName("paragraph");

var alarmIcon = document.getElementById("alarmIcon");

var alarmContainer = document.getElementById("container-alarm");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var setButton = document.getElementById("set");
var clearButton = document.getElementById("clear");
var cancelButton = document.getElementById("cancel");

var savedTime = 0; //initial value (No Alarm Saved)

var currentDate = new Date();
timer.innerText = currentDate.toLocaleTimeString();  //intial value

setInterval(function(){

    var currentDate = new Date();
    timer.innerText = currentDate.toLocaleTimeString();

    alarmIcon.addEventListener('click',function(){

        timerContainer.style.display = "none";
        paragraph[0].style.display = "none";
        alarmContainer.style.display = "flex";

        clearButton.addEventListener('click',function(){
            hours.value = 0;
            minutes.value = 0;
            seconds.value = 0; 
            
            savedTime = 0;

        });

        setButton.addEventListener('click',function(){
            var hr = Number(hours.value);
            var min = Number(minutes.value);
            var sec = Number(seconds.value);
            savedTime = Math.floor(Date.now()/1000) + Number((hr*60*60) + (min*60) + (sec));
  
        });
        cancelButton.addEventListener('click',function(){
            alarmContainer.style.display = "none";
            timerContainer.style.display = "flex";
            paragraph[0].style.display = "block";
        })
    })

    if(Math.floor(Date.now()/1000) === savedTime){
        let alarmSound = new Audio('alarmsound.wav');
        alarmSound.play();
        savedTime = 0;
    }
},1000); //Update Timer Every 1 sec
