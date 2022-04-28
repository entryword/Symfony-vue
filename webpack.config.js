var Encore = require('@symfony/webpack-encore');
var Webpack = require('webpack');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .enableVueLoader() // here is where we can use Vue in Symfony

    .addEntry('app', './assets/js/app.js')

    .splitEntryChunks()

    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .addPlugin(new Webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: true,
    }))
;

module.exports = Encore.getWebpackConfig();