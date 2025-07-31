import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en/translation';
import translationPT from './pt/translation';

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
};

const storedLang = localStorage.getItem('language') || 'pt';

i18n.use(initReactI18next).init({
  resources,
  lng: storedLang,
  fallbackLng: 'pt',
  interpolation: { escapeValue: false },
});

export default i18n;
