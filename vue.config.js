module.exports = {
    publicPath: './',
    pluginOptions: {
        i18n: {
            locale: 'ja',
            fallbackLocale: 'ja',
            localeDir: 'locales',
            enableInSFC: false
        }
    },

    pwa: {
        name: 'ぺこらボタン',
        msTileColor: '#728bf3',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js'
        },
        themeColor: '#728bf3'
    },
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'https://ferferian.sytes.net/peko',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
}
