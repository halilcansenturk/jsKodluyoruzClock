let myName = prompt("Lütfen İsminizi girin")
let myNameLink = document.querySelector("#myName")
myNameLink.innerHTML = myName 

window.onload = function(){
    showTime();
}

function showTime(){
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let dayOfWeek = daysOfWeek[now.getDay()];
  let formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
  let formattedHours = (hours < 10) ? "0" + hours : hours;


    document.querySelector("#myClock").innerHTML =
    formattedHours + ":" + formattedMinutes + ":" + seconds + " - " + dayOfWeek;
}

