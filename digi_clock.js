const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');
const dateElement = document.getElementById("date");

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});


const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let format = "AM";

    if (hr >= 12) {
        format = "PM";
    }

    if (hr > 12) {
        hr = hr - 12;
    }

    if (hr == 0) {
        hr = 12;
    }

    hr = hr < 10 ? `0${hr}` : hr;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${mins} : ${secs}`;
    timeformat.innerHTML = format;

    dateElement.innerHTML = new Date().toDateString();
}