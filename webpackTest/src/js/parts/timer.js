function timer(){
    //Назначение даты окончания.
  let deadline = "2024-12-31";

  //Функция получения оставшегося времени до даты окончания.
  function getRemainigTime(endtime) {
    let millsecRemaining = Date.parse(endtime) - Date.parse(new Date());
        hours = addZero(Math.floor((millsecRemaining / (1000 * 60 * 60)) % 24)),
        minutes = addZero(Math.floor((millsecRemaining / (1000 * 60)) % 60)),
        seconds = addZero(Math.floor((millsecRemaining / 1000) % 60));

        // Функция конвертации значений, добавляет 0 для правильности форматирования если число < 10.
        function addZero(i) {
          if(i<10){
            i = "0" + i;
          }

          return i;
        }

    return {
      millsecRemaining: millsecRemaining,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  //Функция установки таймера.
  function setClock(id, endtime) {
    let clock = document.getElementById(id);
    let hoursSpan = clock.querySelector(".hours");
    let minutesSpan = clock.querySelector(".minutes");
    let secondsSpan = clock.querySelector(".seconds");

    let clockInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getRemainigTime(endtime);
      if (t.millsecRemaining <= 0) {
        clearInterval(clockInterval);
      }

      hoursSpan.textContent = t.hours;
      minutesSpan.textContent = t.minutes;
      secondsSpan.textContent = t.seconds;
    }
  }
  
  setClock("timer", deadline);
}

module.exports = timer;