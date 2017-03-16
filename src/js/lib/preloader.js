var loaded = false;
window.onload = function(){
	loaded = true;
}

$(document).ready(function(){
	const $preloader = $('.preloader');
	const $preloaderText = $preloader.find('.preloader__text');
	const $preloaderTextValue = $preloader.find('.preloader__text__value');

	const removeElement = function(el){
		el.fadeOut(1000, function(){
			el.remove();
		})
	};

	const $window = $(window);
	/*
	$window.load(function(){
		removeElement($preloader)
	})
*/
// alert (loaded)

if (loaded){
	removeElement($preloader)
}
else{
	$window.on('load', function(){
		removeElement($preloader)
	})
}

	setTimeout(function(){removeElement($preloader)}, 2000)

	$('#body').imagesLoaded()
	.always(function ( instance ) {
			removeElement($preloader);
		// console.log('always', instance);
	})
	.done( function( instance ) {
		// console.log('done', instance);
	})
	.fail(function(instance) {
		// console.log('fail', instance);
	})
	.progress(function( instance, image ) {
		const percentage = Math.round(100/instance.images.length * instance.progressedCount);
		// console.log('progress', percentage);
		$preloaderTextValue.html(percentage + '%');
		const size = 30 + percentage;
		$preloaderText.css('width', size + 'px').css('height', size + 'px');
	});

	$("img.lazy").lazyload({
		threshold : 20,
		effect : "fadeIn"
	});

})
