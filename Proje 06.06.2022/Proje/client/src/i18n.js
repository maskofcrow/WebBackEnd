import { createI18n } from "vue-i18n";

const VUE_APP_I18N_LOCALE = process.env.VUE_APP_I18N_LOCALE ? process.env.VUE_APP_I18N_LOCALE : "tr";
const VUE_APP_I18N_FALLBACK_LOCALE = process.env.VUE_APP_I18N_FALLBACK_LOCALE ? process.env.VUE_APP_I18N_FALLBACK_LOCALE : "tr";

function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

const i18n = createI18n({
    locale: VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: loadLocaleMessages()
})

export default i18n;