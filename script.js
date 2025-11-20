console.log("60");

let time = 60;

let timerId = setInterval(() =>{
    time--
    console.log(time)
    if (time === 30) {
        alert('30 ХВИЛИН')
    }
    if (time === 0) {
        clearInterval(timerId)
        alert("ЧАС ВИЙШОВ")
    }
}, 60000)