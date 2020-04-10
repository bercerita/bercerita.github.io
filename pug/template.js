var database = 'https://jsonblob.com/api/3a003d6e-7b22-11ea-a2ae-dfc2463fdc04'

var loadingStart = () => $('.loading').removeClass('sembunyi')
var loadingDone = () => $('.loading').addClass('sembunyi')

$('.navbar-brand').click(() => {
	$('html, body').animate({
		scrollTop: 0
	}, 800)
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js', {
        scope: '.' // <--- THIS BIT IS REQUIRED
    }).then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}