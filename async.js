setInterval(getTime, 1000)


function getTime(){
    let date = new Date()
    console.log(date.getHours()-12, date.getMinutes(), date.getSeconds())
} 