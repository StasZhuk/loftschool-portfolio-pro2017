module.exports = function() {

    return window.onload = function () {
        //получаем элементы
        var button = document.querySelector('.btn__auth');
        var flipContainer = document.querySelector('.flip__container');
        var body = document.querySelector('.clouds');

        
        //вешаем на него событие
        button.onclick = function(e) {
            e.stopPropagation();
            flipContainer.classList.toggle('flip');
            //предотвращаем переход по ссылке href
            return false;
        }


        body.onclick = function(e) {
            e.stopPropagation();
            if(e.target == body) {
                flipContainer.classList.remove('flip');
            }
            return false;
        }
    }

}