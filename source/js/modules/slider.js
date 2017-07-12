module.exports = function() {
    
    var data1 = [
        {
            title: "Сайт школы онлайн образования",
            image: "../assets/img/slider/work-1.png",
            description: "Main-preview 1",
            tags: ["js", "html", "css"],
            num: "1"
        },
        {
            title: "100 Days CSS Challenge",
            image: "../assets/img/slider/work-2.png",
            description: "Main-preview 2",
            tags: ["css", "html", "animation", "pug"],
            num: "2"
        },
        {
            title: "Дезинфектор N1",
            image: "../assets/img/slider/work-3.png",
            description: "Main-preview 3",
            tags: "one scroll page",
            num: "3"
        },
        {
            title: "Дома и Бани из бревна",
            image: "../assets/img/slider/work-4.png",
            description: "Main-preview 4",
            tags: "landing page",
            num: "4"
        },
        {
            iconDown: "../assets/img/sprite/sprite.svg#arrow_down",
            iconBtnPreview: "../assets/img/sprite/sprite.svg#link"
        }
    ];
    
    
    var slider1 = document.querySelector(".slider-1");
        slider(slider1, data1);


    function slider(elem, data) {
        var currentSlide = 0;
        var dataLength = data1.length;

        var slider = elem;
        var mainSlider = createSliderCurrentPreview();
        var navSlider = document.createElement("div");
        var downSlider = createSliderChangeNav('down', 'left', 'arrow--down');
        var upSlider = createSliderChangeNav('up', 'right', 'arrow--up');
        var descrSlider = createSliderMainPreview();

        slider.classList.add("slider");
        navSlider.classList.add("slider__preview-nav");
    
        slider.appendChild(descrSlider);
        slider.appendChild(mainSlider);
        slider.appendChild(navSlider);
        navSlider.appendChild(downSlider);
        navSlider.appendChild(upSlider);
        
        downSlider.addEventListener('click', function(e) {
            e.preventDefault();
            currentSlide = getSlide(currentSlide - 1);
            fillSlider();
        });

        upSlider.addEventListener('click', function(e) {
            e.preventDefault();
            currentSlide = getSlide(currentSlide + 1);
            fillSlider();
        });

        fillSlider();
    
        
    


    function fillSlider() {
        var down = getSlide(currentSlide - 1);
        var up = getSlide(currentSlide + 1);

        descrSlider.querySelector('.heading__sub').innerText = data1[currentSlide].title;
        descrSlider.querySelector('.main-preview__desc').innerText = data1[currentSlide].tags;
        mainSlider.querySelector('.slider__number').innerText = data1[currentSlide].num;
        upSlider.querySelector('.slider__number').innerText = data1[up].num;
        downSlider.querySelector('.slider__number').innerText = data1[down].num;
        mainSlider.querySelector('.slider__image-preview').style.backgroundImage = 'url(' + data1[currentSlide].image + ')';
        upSlider.querySelector('.slider__image-preview').style.backgroundImage = 'url(' + data1[up].image + ')';
        downSlider.querySelector('.slider__image-preview').style.backgroundImage = 'url(' + data1[down].image + ')';
    }


    function getSlide(value) {
        if(value >= dataLength - 1) {
            return 0;
        }
        else if(value < 0) {
            return dataLength - 2;
        }
        else {
            return value;
        }
    }
    }


    // Создает элементы навигации, блоки arrowUp, arrowDown
    function createSliderChangeNav(className, classOverlay, classDownOrUp) {
        var navContainer = document.createElement('div');
        var navImage = document.createElement('div');
        var overlay = document.createElement('div');
        var navLink = document.createElement('a');
        var navSvg = document.createElement('svg');
        var navUse = document.createElement('use');
        var span = document.createElement('span');

        navContainer.classList.add('slider__preview-' + className);
        navImage.classList.add('slider__image-preview');
        overlay.classList.add('overlay__preview');
        overlay.classList.add('overlay__preview--' + classOverlay);
        navLink.classList.add('arrow__link');
        navLink.classList.add(classDownOrUp);
        span.classList.add('slider__number');

        navLink.setAttribute('href', '#');
        navSvg.setAttribute('viewbox', '0 0 100 100');
        navUse.setAttribute('xlink:href', data1[4].iconDown);

        navContainer.appendChild(overlay);
        navContainer.appendChild(navImage);
        navContainer.appendChild(span);
        overlay.appendChild(navLink);
        navLink.appendChild(navSvg);
        navSvg.appendChild(navUse);

        return navContainer;
       }
    


    // Создает элементы блока mainPreview
    function createSliderMainPreview() {
        var mainPreview = document.createElement('div');
        var previewContent = document.createElement('div');
        var previewHeadingWrap = document.createElement('div');
        var previewHeading = document.createElement('h2');
        var previevDesc = document.createElement('div');
        var previewBtn = document.createElement('div');
        var previewBtnLink = document.createElement('a');
        var previewSvg = document.createElement('svg');
        var previewUse = document.createElement('use');
        var previewSpan = document.createElement('span');

        mainPreview.classList.add('slider__main-preview');
        previewContent.classList.add('main-preview__content');
        previewHeadingWrap.classList.add('heading__sub-wrap');
        previewHeading.classList.add('heading__sub');
        previevDesc.classList.add('main-preview__desc');
        previewBtn.classList.add('main-preview-btn');
        previewBtnLink.classList.add('btn', 'btn--preview');
        previewSvg.classList.add('icon');

        previewBtnLink.setAttribute('href', '#');
        previewUse.setAttribute('xlink:href', data1[4].iconBtnPreview);

        previewSpan.innerHTML = 'посмотреть сайт';

        mainPreview.appendChild(previewContent);
        previewContent.appendChild(previewHeadingWrap);
        previewContent.appendChild(previevDesc);
        previewContent.appendChild(previewBtn);
        previewHeadingWrap.appendChild(previewHeading);
        previewBtn.appendChild(previewBtnLink);
        previewBtnLink.appendChild(previewSvg);
        previewBtnLink.appendChild(previewSpan);
        previewSvg.appendChild(previewUse);
        
        return mainPreview;
       }


       function createSliderCurrentPreview() {
        var currentPreview = document.createElement('div');
        var imagePreview = document.createElement('div');
        var span = document.createElement('span');

        currentPreview.classList.add('slider__small-preview');
        imagePreview.classList.add('slider__image-preview');
        span.classList.add('slider__number', 'number--big');

        currentPreview.appendChild(span);
        currentPreview.appendChild(imagePreview);

        return currentPreview;
       }
}