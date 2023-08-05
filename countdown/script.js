const date = new Date ()
const currentYear = date.getFullYear()
const newYear = currentYear+1
const newYearEve = '1 Jan '+String(newYear)
const daysEl = document.getElementById("days")
const hrsEl = document.getElementById("hrs")
const minEl = document.getElementById("min")
const secEl = document.getElementById("sec")

function countdown(){
    const date = new Date ()
    const newYearDate = new Date(newYearEve)
    const totalSeconds = (newYearDate - date)/1000
    const sec = Math.floor(totalSeconds)%60
    const min  = Math.floor(totalSeconds/60)%60
    const hrs = Math.floor(totalSeconds/3600)%24
    const days = Math.floor(totalSeconds/3600/24)
    daysEl.innerHTML=days <10 ? `0${days}`:days
    hrsEl.innerHTML=hrs < 10 ? `0${hrs}`:hrs
    minEl.innerHTML=min < 10 ? `0${min}`:min
    secEl.innerHTML=sec < 10 ? `0${sec}`:sec
}
countdown()
setInterval(countdown,1000)