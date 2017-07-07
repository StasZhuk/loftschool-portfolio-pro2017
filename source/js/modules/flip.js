module.exports = function() {


        //получаем элементы
        var button = document.querySelector('.btn__auth');
        var buttonBack = document.querySelector('.btn__back');
        var flipContainer = document.querySelector('.flip__container');
        var body = document.querySelector('.wrapper');

        
        //вешаем на него событие
        button.onclick = function(e) {
            e.stopPropagation();
            flipContainer.classList.toggle('flip');
            button.style.opacity = '0';
            setTimeout(function() {
                button.style.visibility = 'hidden';
            }, 500);
            //предотвращаем переход по ссылке href
            return false;
        }
        buttonBack.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
            flipContainer.classList.toggle('flip');
            button.style.visibility = 'visible';
            button.style.opacity = '1';
            //предотвращаем переход по ссылке href
            return false;
        }


        body.onclick = function(e) {
            e.stopPropagation();
            if(e.target == body) {
                flipContainer.classList.remove('flip');
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            }
            return false;
        }


}