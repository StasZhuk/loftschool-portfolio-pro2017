module.exports = function() {

    const circlesMiddle = document.querySelector('.main-content');
    var PosCirc = offsetPosition(circlesMiddle);
    

    return window.addEventListener('scroll', function() {
        var windowScrolTop = window.pageYOffset;
        const elemTopChange = circlesMiddle.getBoundingClientRect().top;
        var circles = document.querySelectorAll('.circles');
    
        if(windowScrolTop >= PosCirc - 10) {
            for(var i = 0; i < circles.length; i++) {
                circles[i].classList.add('active');
            }
        }
    });

    function offsetPosition(element) {
        var offsetTop = 0;

        do {
             offsetTop  += element.offsetTop;
        } 
        while (element = element.offsetParent);

        return offsetTop;
    }
}