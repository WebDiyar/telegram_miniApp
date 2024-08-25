import { FC } from 'react';
import '../styles/LanguageSwitcher.css';

interface LanguageSwitcherProps {
    language: 'en' | 'ru';
    onLanguageChange: (lang: 'en' | 'ru') => void;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ language, onLanguageChange }) => {
    return (
        <div className="language-switcher">
            <button
                onClick={() => onLanguageChange('en')}
                className={language === 'en' ? 'active' : ''}
            >
                English
            </button>
            <button
                onClick={() => onLanguageChange('ru')}
                className={language === 'ru' ? 'active' : ''}
            >
                Русский
            </button>
        </div>
    );
};

export default LanguageSwitcher;
