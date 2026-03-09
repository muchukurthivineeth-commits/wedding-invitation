// Wedding Date
var weddingDate = new Date("March 15, 2026 10:56:00").getTime();

// Haldi Date
var haldiDate = new Date("March 13, 2026 18:00:00").getTime();

// Pellikuthuru Date
var pelliDate = new Date("March 14, 2026 09:00:00").getTime();

var countdown = setInterval(function(){

var now = new Date().getTime();


// 💍 Wedding Countdown
var distance = weddingDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days + " Days " +
hours + " Hours " +
minutes + " Minutes " +
seconds + " Seconds ";

if(distance < 0){
document.getElementById("countdown").innerHTML = "The Wedding Day Has Arrived! 💍";
}


// 💛 Haldi Countdown
var haldiDistance = haldiDate - now;

var hDays = Math.floor(haldiDistance / (1000 * 60 * 60 * 24));
var hHours = Math.floor((haldiDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var hMinutes = Math.floor((haldiDistance % (1000 * 60 * 60)) / (1000 * 60));
var hSeconds = Math.floor((haldiDistance % (1000 * 60)) / 1000);

document.getElementById("haldiCountdown").innerHTML =
hDays + "d " + hHours + "h " + hMinutes + "m " + hSeconds + "s";


// 🌸 Pellikuthuru Countdown
var pelliDistance = pelliDate - now;

var pDays = Math.floor(pelliDistance / (1000 * 60 * 60 * 24));
var pHours = Math.floor((pelliDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var pMinutes = Math.floor((pelliDistance % (1000 * 60 * 60)) / (1000 * 60));
var pSeconds = Math.floor((pelliDistance % (1000 * 60)) / 1000);

document.getElementById("pelliCountdown").innerHTML =
pDays + "d " + pHours + "h " + pMinutes + "m " + pSeconds + "s";


},1000);