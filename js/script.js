const form = document.querySelector('.input'),
    send = document.getElementById('send'),
    peep = document.getElementById('ass');

//Событие получение данных с формы
    form.addEventListener('submit', getFromValue);

//функция получения данных с формы
    function getFromValue(event) {
        const name = form.querySelector('[name="message"]')
        const data = {
            name: name.value
        }
    
        console.log(data);
        event.preventDefault();

        function sendValue() {
            if (data["name"] == 'red') {
                peep.style.fontSize = '50px';
            }
        }
        sendValue();
    }
