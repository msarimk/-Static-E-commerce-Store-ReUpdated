var cacheName = 'pwa-practice-v3';
var filesToCache = [
    '/' ,
    '/index.html' ,
    './css/bootstrap.min.css',
    './css/owl.carousel.min.css', 
    './css/all.min.css',
    './css/fontawesome.min.css',
    './css/bootstrap.css',
    './css/all.css',
    './css/aos.css',
    './css/slider.css',
    './css/index.css',
    './css/animate.css',
    './icomoon/style.css',
    './icomoon/fonts/icomoon.eot',
    './icomoon/fonts/icomoon.ttf',
    './icomoon/fonts/icomoon.woff',
    './webfonts/fa-brands-400.woff2',
    './webfonts/fa-regular-400.woff2',
    './webfonts/fa-solid-900.woff2',
    './webfonts/fa-v4compatibility.woff2',
    './favicon.ico',
    './Loader/Double Ring-1s-200px.gif',
    './images/logo/kindpng_4449582.png',
    './images/wallpaperflare.com_wallpaper (1).jpg',
    './images/blender-10933.jpg',
    './images/kitchen-g4a6845940_1280.jpg',
    './images/cook-gca3434c4f_1280.jpg',
    './images/wallpaperflare.com_wallpaper.jpg',
    './images/84aee5_3cff6833b33b4b269b8eff41fac847df_mv2_d_1500_1500_s_2.webp',
    './images/eggs.webp',
    './images/Cook-Nook-Gas-powered-toaster-oven-and-stove_2.jpg',
    './images/iRobot-Braava-Jet-M6-6110-1024x814.jpg',
    './images/oxo_cookie_press_2021_2.jpg',
    './images/Vacuum-Sealer-1024x727.jpg',
    './images/visore_our_brands_delonghi.webp',
    './images/84aee5_c7d3fccf500347b4a12b9ab75be1d909_mv2.webp',
    './images/84aee5_1ee9448ade2345de9758dea425d78fae_mv2.webp',
    './images/blenders.webp',
    './images/kt.webp',
    './images/ju.webp',
    './images/tt.webp',
    './images/cm.webp',
    './js/jquery-3.6.0.min.js',
    './js/aos.js',
    './js/bootstrap.js',
    './js/popper.min.js',
    './js/bootstrap.min.js',
    './js/owl.carousel.min.js',
    './js/main.js',
    './js/app.js',
    './js/modal.js',
    '/PWA.js'

];
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
          
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response){
        return response || fetch(e.request);
      })
    );
});














