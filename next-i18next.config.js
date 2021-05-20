module.exports = {
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    localeDetection: false, // * Prevents getting language automatically and sets the turkish as the first

    domains: [
      {
        domain: 'http://localhost:3000',
        defaultLocale: 'tr'
      },
      {
        domain: 'http://localhost:3000/en',
        defaultLocale: 'en'
      }
    ]
  }
};
