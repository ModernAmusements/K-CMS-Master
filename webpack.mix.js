// jshint ignore: start
/* eslint-disable */
const mix = require('laravel-mix');

mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
   });

mix.js([
    'src/js/swiper.min.js',
    'src/js/darkmode.js',
    'src/js/mobile-nav.js',
    'src/js/modal.js',
    'src/js/work-page.js',
    'src/js/plugins.js',
    'src/js/current-device.min.js',
    ], 'public/js/main.js');
    
mix.sass('src/scss/index.scss', 'public/css');

mix.browserSync('http://fff-corp-2020.ma');
