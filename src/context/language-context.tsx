"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import en from '@/locales/en.json';
import brx from '@/locales/brx.json';
import as from '@/locales/as.json';
import bn from '@/locales/bn.json';

export const languages = [
  { value: "en", label: "English" },
  { value: "brx", label: "Bodo" },
  { value: "as", label: "Assamese" },
  { value: "bn", label: "Bengali" },
];

const translations: { [key: string]: any } = { en, brx, as, bn };

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const [language, setLanguage] = useState(Array.isArray(params.lang) ? params.lang[0] : params.lang || 'en');

  useEffect(() => {
    const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
    if (lang && languages.some(l => l.value === lang)) {
      setLanguage(lang);
    } else {
      setLanguage('en');
    }
  }, [params.lang]);

  const t = (key: string) => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
