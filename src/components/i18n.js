import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import translationEn from './translations/en.json';
import translationFr from './translations/fr.json';
// Add more as needed for other languages

// Configure i18next
i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language if translation is missing
    resources: {
      en: {
        translation: translationEn, // English translations
      },
      fr: {
        translation: translationFr, // French translations
      },
      // Add more languages here
    },
    interpolation: {
      escapeValue: false, // React already escapes the content
    },
  });

export default i18n;
