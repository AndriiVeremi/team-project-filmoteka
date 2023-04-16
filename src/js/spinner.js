import preloaderGIF from '../images/spinner/preloaderGIF.gif';
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1000);
});