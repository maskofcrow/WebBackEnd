module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/scss/abstracts/_variables.scss";`,
            },
        },
    },

    pluginOptions: {
        i18n: {
            locale: "tr",
            fallbackLocale: "tr",
            localeDir: "locales",
            enableInSFC: false,
        },
    },
    devServer: {
        disableHostCheck: true,
        port: 5001
    },
};