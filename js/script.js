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
  info.addEventListener('click', function(event) {
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
});
