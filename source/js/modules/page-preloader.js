module.exports = function() {
    var
        images            = document.images,
        imagesTotalCount  = images.length, 
        imagesLoadedCount = 0,
        percentDisplay    = document.querySelector('#load-perc'),
        preloader         = document.querySelector('#page-preloader');

    for(let i = 0; i < imagesTotalCount; i++) {
        imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
    }

    function imageLoaded() {
        imagesLoadedCount++;
        percentDisplay.innerHTML = (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';
        
        if(imagesLoadedCount === imagesTotalCount) {
            setTimeout(function() {
                if(!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                }
            }, 1000);
        }
   }
}