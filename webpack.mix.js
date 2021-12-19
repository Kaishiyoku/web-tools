const mix = require('laravel-mix');

mix
    .copy('src/index.html', 'dist/index.html')
    .js('src/app.js', 'dist/app.js')
    .postCss('src/app.css', 'dist', [
        require('tailwindcss')('./tailwind.config.js'),
    ]);