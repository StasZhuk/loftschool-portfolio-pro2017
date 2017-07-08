module.exports = function() {

    var form = document.querySelector("#form");
    var submit = document.querySelector("#submit");
    var inputs = document.querySelectorAll("input");
    var inpPass = document.querySelector("#form-password");
    var inpLogin = document.querySelector("#form-login");
    var iconLogin = document.querySelector(".icon-login");
    var iconPass = document.querySelector(".icon-pass");
    var acceptColor = '#004cd1';
    console.log(form);


     submit.addEventListener('click', function(e) {
            if(inpLogin.value === '') {
                inpLogin.focus();
            }
            e.preventDefault();
            var valid = true;

            // form.addEventListener('input', function(ev) {
                if(inpLogin.value.match( /\w+/g ) ) {
                    inpLogin.style.border = '2px solid ' + acceptColor;
                    inpLogin.nextSibling.style.display = "none";
                    iconLogin.style.fill = acceptColor;
                    valid = false;
                }

                if(inpLogin.value === '') {
                    inpLogin.style.border = '2px solid red';
                    inpLogin.nextSibling.style.display = "block";
                    inpLogin.nextSibling.innerHTML = "введите логин";
                    iconLogin.style.fill = "red";
                    valid = true;
                }
                if(inpPass.value.match( /\w+/g ) ) {
                    inpPass.style.border = '2px solid ' + acceptColor;
                    inpPass.nextSibling.style.display = "none";
                    iconPass.style.fill = acceptColor;
                    valid = false;
                }

                if(inpPass.value === '' || inpPass.value.length < 5) {
                    inpPass.style.border = '2px solid red';
                    inpPass.nextSibling.style.display = "block";
                    inpPass.nextSibling.innerHTML = "введите логин не менее 5 символов";
                    iconPass.style.fill = "red";
                    valid = true;
                }

                if(valid) {
                      console.log("Заполните все поля");
                }
                else {
                      form.submit();  
                }

            // })
            // проверяем валидность имени

            // if(( /\d/ ).test(stringName) || stringName == '' ) {
            //     inputName.style.border = '1px solid red';
            // }
            // // проверяем валидность почты
            // if((regMail).test(stringMail)) {
            //     // console.log('мыло верно');
            //     inputMail.style.border = '1px solid green';
            // }
            // if(!(regMail).test(stringMail)) {
            //     // console.log('мыло не верно!');
            //     inputMail.style.border = '1px solid red';
            // }

            // // проверяем валидность сообщения
            // if(( /\w/ ).test(stringMessage) && stringMessage.length > 10) {
            //     inputMessage.style.border = '1px solid green';
            // }
            // if(!( /\w/ ).test(stringMessage) || stringMessage.length <= 10) {
            //     inputMessage.style.border = '1px solid red';
            // }
        // });
     });
}







//     function CustomValidation() { }

//         CustomValidation.prototype = {
//         // Установим пустой массив сообщений об ошибках
//         invalidities: [],

//         // Метод, проверяющий валидность
//         checkValidity: function(input) {

//             var validity = input.validity;

//             if (!inputLogin.value.match(/[A-Z]/g)) {
//                 tooltipthis.addInvalidity('Need beeger');
//             }
//         },

//         // Добавляем сообщение об ошибке в массив ошибок
//         addInvalidity: function(message) {
//             this.invalidities.push(message);
//         },

//         // Получаем общий текст сообщений об ошибках
//         getInvalidities: function() {
//             return this.invalidities.join('. \n');
//         }
//     };

//         // Добавляем обработчик клика на кнопку отправки формы
//         submit.addEventListener('click', function(e) {

//         // Пройдёмся по всем полям
//         for (var i = 0; i < inputs.length; i++) {

//             var input = inputs[i];

//             // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
//             if (input.checkValidity() == false) {

//             var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
//             inputCustomValidation.checkValidity(input); // Выявим ошибки
//             var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
//             input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
//             } // закончился if
//         } // закончился цикл
//         });
// }