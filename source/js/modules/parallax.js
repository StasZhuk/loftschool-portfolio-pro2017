module.exports = function() {

    return (function() {
        var parallaxContainer = document.getElementById('parallax'),
        layers = parallaxContainer.children;

        var moveLayers = function(e) {
            var initialX = (window.innerWidth / 2) - e.pageX;
            var initialY = (window.innerHeight / 2) - e.pageY;

            [].slice.call(layers).forEach(function(layer, index) {
                var 
                    divider = index / 100,
                    positionX = initialX * divider,
                    positionY = initialY * divider,
                    positionLeft = (window.innerWidth / 2) * divider,
                    transformString = 'translate(' + positionX + 'px, ' + positionY + 'px)',
                    image = layer.firstElementChild;

                layer.style.transform = transformString;
                // image.css.bottom = positionLeft;

            });
        };

        window.addEventListener('mousemove', moveLayers);
    })();
}