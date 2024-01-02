function form(){
      //Работа с формой

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы свяжемся с вами!',
        failure: 'Что-то пошло не так...'
    }

    let form = document.querySelector('.main-form'),
        inputs = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    //Создание события при отправке
    form.addEventListener('submit', function(event){
        event.preventDefault(); //Прерывание стандартного поведения

        form.appendChild(statusMessage);

        let request = new XMLHttpRequest(); //Создание запроса
        request.open('POST', '/server.php');

        //Назначение заголовков запроса
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form); //Считывание данных с формы.

        let obj = {};
        formData.forEach(function(value, key){
        obj[key] = value;
        });
        let json = JSON.stringify(obj);
        //Преобразование данных с формы в JSON.


        //Отправка запроса
        //request.send(formData);
        request.send(json);

        //Изменение текста сообщения на форме.
        request.addEventListener('readystatechange', function(){
        if(request.readyState < 4){
            statusMessage.textContent = message.loading; 
        }else if(request.readyState == 4 && request.status == 200){
            statusMessage.textContent = message.success
        }else{
            statusMessage.textContent = message.failure
        }
        })

        //Очистка полей ввода формы
        for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
        }

    })
}

module.exports = form;