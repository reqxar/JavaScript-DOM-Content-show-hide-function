function calculator(){
         //Калькулятор стоимости

         let personsInput = document.querySelectorAll('.counter-block-input')[0],
         daysInput = document.querySelectorAll('.counter-block-input')[1],
         total = document.getElementById('total'),
         place = document.getElementById('select'),
         days = 0,
         persons = 0,
         totalResult = 0;

        total.textContent = 0;

        personsInput.addEventListener('change', function(){
        persons = this.value;
        totalResult = (persons + days) * 4000;

        if(daysInput.value == '' || persons == ''){
            total.textContent = 0;
        }else{
            total.textContent = totalResult;
        }

        })

        daysInput.addEventListener('change', function(){
        days = this.value;
        totalResult = (persons + days) * 4000;

        console.log(place)


        if(personsInput.value == '' || days == ''){
            total.textContent = 0;
        }else{
            total.textContent = totalResult;
        }

        })

        place.addEventListener('change', function(){
        let a = totalResult;

        if(daysInput.value != '' && personsInput.value != ''){
            total.textContent = a * this.options[this.selectedIndex].value;
        }else{
            total.textContent = 0;
        }
        })
}

module.exports = calculator;