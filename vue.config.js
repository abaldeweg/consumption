module.exports = {
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
    },
    name: 'Consumption',
    themeColor: '#d7621d',
  },
  pluginOptions: {
    components: {
      title: 'Consumption',
      needsAuth: false,
    },
    i18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: undefined,
    },
  },
}
