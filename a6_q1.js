const date = new Date();

const time = date.getHours()

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const getDays = days[date.getDay()];

const todayDate = date.getDate()

const months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December",];
const getMonths = months[date.getMonth()];

const year = date.getFullYear()

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

function currentDate(){
    p1.textContent = `Today is ${getDays}, ${todayDate} ${getMonths} ${year},`
}

function greetings(){
    if(time < 12) {
        p2.textContent = `Welcome, and "Good Morning to you.`
    }
    else if(time > 12 && time <= 20){
        p2.textContent = `Welcome, and Good Evening to you.`
    }
    else
        p2.textContent = `Welcome, and Good Night to you.`
}

function daysLeft(){
    let endOfYear = new Date(date.getFullYear(), 11, 31); 
    let diff = endOfYear - date;
    let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    p3.textContent = `Number of Days left till end of the year : ${daysLeft}`
}

currentDate()
greetings()
daysLeft()