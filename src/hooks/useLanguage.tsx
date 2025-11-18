"use client";
import { createContext, useContext, useEffect, useState } from 'react';

type LanguageContextType = { language: string; toggleLanguage: () => void } | undefined;
const LanguageContext = createContext<LanguageContextType>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>('pt-BR');

  useEffect(() => {
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'pt-BR' ? 'en-US' : 'pt-BR'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
