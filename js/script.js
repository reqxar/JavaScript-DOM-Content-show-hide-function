window.addEventListener("DOMContentLoaded", function () {
  let info = document.querySelector(".info-header"),
    tab = document.querySelectorAll(".info-header-tab"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  //Функция для смены класса на скрытие блока tabContent
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);
  //Функция для смены класса на отображение блока tabContent
  function showTabContent(a) {
    if (tabContent[a].classList.contains("hide")) {
      tabContent[a].classList.remove("hide");
      tabContent[a].classList.add("show");
    }
  }
  /* Добавление события. При клике на один из tabs родительсого элемента info 
  Будут отражен только tabContent в соответствии с нажатым tab с помщью замены класса.
  
  Номер tab-a соответствует номеру tabContent, возможно переиспользование на
  других проектах, для этого потребуется:
  1. Отобрать контент который мы будем скрывать отображать в tabContent.
  2. Отобрать кнопки меню(tab) при которых будет меняться отражение tabContent.
  3. Отбрать родительский блок для tab-ов меню. В нашем случае это info.
  */
  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //Назначение даты окончания.
  let deadline = "2023-12-31";

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


  //Вывод и скрытие модального окна при нажатии на кнопку

  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');


  more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  })
  
  close.addEventListener('click', function(){
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  })
  
});
