const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")
let futureDate = new Date(2023, 7,7,3,30,10)
const year = futureDate.getFullYear()
const time = futureDate.getHours()
const date = futureDate.getDate()
const month = months[futureDate.getMonth()]
const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = ` giveaway ends on ${weekday} ${date} ${month} ${year} ${time}AM `

const futureTime = futureDate.getTime()
function getRemainingTime(){
  let currentTime = new Date().getTime()
  let t = futureTime - currentTime
  // 1s 1000ms
  // 1m 60 * 1000
  // 1hr 60 *60* 1000
  // 1day 24 * 60 * 60 * 1000
  let oneDay = 24*60*60*1000
  let oneHour = 60*60*1000
  let oneMinute = 60*1000
  let oneSecond = 1000
  let day = Math.floor((t/oneDay))
  let hour = Math.floor((t % oneDay/oneHour))
  let minute = Math.floor((t % oneHour/oneMinute))
  let second = Math.floor((t % oneMinute/oneSecond))
let values = [day,hour,minute,second]
function element(val){
  if(val < 10){
    return ( val = `0 ${val}`)
  }
  else{
    return val
  }
}
items.forEach((item,index)=>{
  item.innerHTML = element(values[index])
})
}
const counter = setInterval(getRemainingTime,1000)
getRemainingTime()
