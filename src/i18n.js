import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'tr'];

availableLanguages.forEach(element => {
  if (element !== 'en') {
    import(`moment/locale/${element}`);
  }
}); // we are importing only the locales that we need.

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    debug: true,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'currentDate') return;
        moment(value)
          .locale(lng)
          .format('LL');
        return value;
      }, //if the format is 'currentDate', then take its __value__ transfom it to a moment object, translate it to the current language and show it in Month DD, YYYY format.
    },
  });

export default i18n;
