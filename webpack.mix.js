let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');


mix.js('src/app.js', 'dist/')
   .postCss('src/app.css', 'dist/', [
      tailwindcss('./tailwind.js'),
   ]);