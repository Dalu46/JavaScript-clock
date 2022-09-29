const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds()
    const minutes = now.getMinutes();
    const hour = now.getHours();

    // console.log(hour)
    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    const secondsDegree = ((seconds / 60) * 360) + 90;

    console.log(hourDegrees)
    // console.log(minutes)

    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
}

setInterval(setDate, 1000);