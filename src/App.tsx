import React, { useState, useEffect } from 'react';
import ZodiacBlock from './components/ZodiacBlock';
import Horoscope from './components/Horoscope';
import LanguageSwitcher from './components/LanguageSwitcher';
import useFetchHoroscope from './hooks/useFetchHoroscope';
import './App.css';

const App: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  const { horoscope, loading } = useFetchHoroscope(selectedSign || '', language);

  useEffect(() => {
    const telegramLanguage = window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code;
    if (telegramLanguage === 'ru') {
      setLanguage('ru');
    } else {
      setLanguage('en');
    }
  }, []);

  return (
    <div className="app-container">
      <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
      {!selectedSign ? (
        <ZodiacBlock onSelect={setSelectedSign} language={language} />
      ) : (
        <Horoscope description={loading ? 'Loading...' : horoscope} onClose={() => setSelectedSign(null)} language={language} />
      )}
    </div>
  );
};

export default App;
