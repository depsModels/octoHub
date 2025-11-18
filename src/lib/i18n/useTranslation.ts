"use client";
import { useLanguage } from '@/hooks/useLanguage';
import ptTranslations from './pt.json';
import enTranslations from './en.json';

const translations: Record<string, Record<string, string>> = {
  'pt-BR': ptTranslations as Record<string, string>,
  'en-US': enTranslations as Record<string, string>,
};

export const registerLanguage = (languageCode: string, translationData: Record<string, string>) => {
  if (!languageCode || typeof languageCode !== 'string') return false;
  if (!translationData || typeof translationData !== 'object') return false;
  translations[languageCode] = translationData;
  return true;
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string) => {
    if (!translations[language]) {
      const fallbackLanguage = translations['en-US'] ? 'en-US' : 'pt-BR';
      if (!translations[fallbackLanguage] || !translations[fallbackLanguage][key]) return key;
      return translations[fallbackLanguage][key];
    }
    if (!translations[language][key]) {
      if (language !== 'en-US' && translations['en-US'] && translations['en-US'][key]) {
        return translations['en-US'][key];
      }
      return key;
    }
    return translations[language][key];
  };

  return { t, language };
};