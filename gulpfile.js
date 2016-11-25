var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


/**
 *      INSTALL DEPENDENCIES
 *      bower install admin-lte --save
 *      bower install font-awesome --save
 *
 */


elixir(function(mix) {

    mix.less('custom.less', 'public/css/libs/');

    mix.browserify('bootstrap.js', 'public/js/libs/')

    // Copy bootstrap and AdminLTE CSS files to public directory
    mix.copy('bower_components/AdminLTE/bootstrap/css/bootstrap.css', 'public/css/libs/bootstrap.css');
    mix.copy('bower_components/AdminLTE/dist/css/AdminLTE.css', 'public/css/libs/admin-lte.css');
    mix.copy('bower_components/AdminLTE/dist/css/skins/_all-skins.css', 'public/css/libs/admin-lte-skin.css');
    mix.copy('bower_components/AdminLTE/dist/js/app.js', 'public/js/libs/admin-lte.js');


    // Copy fonts from Glypicons
    mix.copy('bower_components/AdminLTE/bootstrap/fonts', 'public/fonts');

    // Select2
    mix.copy('bower_components/select2/dist/css/select2.css', 'public/css/libs/select2.css');
    mix.copy('bower_components/select2/dist/js/select2.js', 'public/js/libs/select2.js');

    // Font Awesome
    mix.copy('bower_components/font-awesome/css/font-awesome.css', 'public/css/libs/font-awesome.css');
    mix.copy('bower_components/font-awesome/fonts', 'public/fonts');

    // iCheck
    mix.copy('bower_components/AdminLTE/plugins/iCheck/square/blue.css', 'public/css/libs/i-check.css');
    mix.copy('bower_components/AdminLTE/plugins/iCheck/square/blue.png', 'public/css/blue.png');
    mix.copy('bower_components/AdminLTE/plugins/iCheck/icheck.js', 'public/js/libs/i-check.js');

    // Merge all CSS files in one file.
    mix.styles([
        '/libs/bootstrap.css',
        '/libs/select2.css',
        '/libs/admin-lte.css',
        'libs/admin-lte-skin.css',
        'libs/font-awesome.css',
        '/libs/i-check.css'
        // '/libs/custom.css'
    ], './public/css/min.css', './public/css');


    // Merge all JS  files in one file.
    mix.scripts([
        '/libs/bootstrap.js',
        '/libs/admin-lte.js',
        '/libs/i-check.js',
        '/libs/select2.js'
    ], './public/js/min.js', './public/js');

});