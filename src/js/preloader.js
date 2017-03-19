const percentLoad = true;
var loaded = false;
window.onload = function (){
    "use strict";
    loaded = true;
}

$(document).ready(function() {
        $("img[data-original]").lazyload({
            effect : "fadeIn"
        });
});

$(document).ready(function() {
    console.log('!!!');
    const $preloader = $('.preloader');
    const $preloaderText = $preloader.find('.preloader__text');
    const $preloaderValue = $preloader.find('.preloader__value');

    const removeElement = function($el) {
        $el.fadeOut(100, function() {
            $el.remove();
        });
    }

    const $window = $(window);
    $window.load(function() {
        removeElement($preloader)
    });

    if (loaded) {
        removeElement($preloader);
    } else {
        $(window).on('load', function() {
            removeElement($preloader);
        })
    }

    setTimeout( function() {
        removeElement($preloader);
    }, 2000);

    // const removeElement =
    // $('#body').imagesLoaded()
    //     .always( function(instance) {
    //         $preloader.fadeOut(1000, function() {
    //             $preloader.remove();
    //         });
    //         console.log('always', instance);
    //     })
    //     .done( function(instance) {
    //         console.log('done', instance);
    //     })
    //     .fail( function(instance) {
    //         console.log('fail', instance);
    //     })
    //     .progress( function(instance, image ) {
    //         const percentage = Math.round(100 / instanse.images.length * instance.progressCount);
    //         $preloaderValue.text(percentage + '%');
    //         const size = 30 + percentage;
    //         $preloaderText.css('width', size + 'px').css('height', size + 'px')
    //         console.log('progress', instance.progressCount, instanse.images.length);
    //     });
});
// import imagesloaded from 'imagesloaded'


