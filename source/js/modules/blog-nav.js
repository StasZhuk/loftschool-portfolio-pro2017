module.exports = function() {

    const navMenu = document.querySelector('.blog__tabs');
    var PosNavTop = offsetPosition(navMenu);
    



    window.addEventListener('scroll', function() {
        var windowScrolTop = window.pageYOffset;
        const elemTopChange = navMenu.getBoundingClientRect().top;
        
        if(windowScrolTop >= PosNavTop - 10) {
            navMenu.classList.add('active');

        }
        else {
            navMenu.classList.remove('active');

        }
    });

    window.addEventListener('resize', function() {
        var windowWidth = window.innerWidth;
        var windowScrolTop = window.pageYOffset;
        console.log(windowScrolTop);
        
        if(windowWidth < 768) {
            navMenu.classList.remove('active');
        }
        if(windowWidth > 768 && windowScrolTop >= PosNavTop) {
            navMenu.classList.add('active');
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