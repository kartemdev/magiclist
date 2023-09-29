import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruLangKeys from './ru.json';
import enLangKeys from './en.json';

export const resources = {
  ru: {
    translation: ruLangKeys
  },
  en: {
    translation: enLangKeys,
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: ['en', 'ru'],
    interpolation: {
      escapeValue: false,
    }
  });

export default i18next;
