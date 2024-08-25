import { FC } from 'react';
import translations, { ZodiacSignId } from '../hooks/translations';
import '../styles/ZodiacBlock.css';

interface ZodiacBlockProps {
    onSelect: (sign: ZodiacSignId) => void;
    language: 'en' | 'ru';
}

interface ZodiacSigns {
    id: ZodiacSignId; icon: string
}

const zodiacSigns: ZodiacSigns[] = [
    { id: 'aries', icon: '♈' },
    { id: 'taurus', icon: '♉' },
    { id: 'gemini', icon: '♊' },
    { id: 'cancer', icon: '♋' },
    { id: 'leo', icon: '♌' },
    { id: 'virgo', icon: '♍' },
    { id: 'libra', icon: '♎' },
    { id: 'scorpio', icon: '♏' },
    { id: 'sagittarius', icon: '♐' },
    { id: 'capricorn', icon: '♑' },
    { id: 'aquarius', icon: '♒' },
    { id: 'pisces', icon: '♓' },
];

const ZodiacBlock: FC<ZodiacBlockProps> = ({ onSelect, language }) => {
    return (
        <div className="zodiac-grid">
            {zodiacSigns.map((sign) => (
                <div key={sign.id} className="zodiac-block" onClick={() => onSelect(sign.id)}>
                    <span className="icon">{sign.icon}</span>
                    <h3>{String(translations[language][sign.id])}</h3>
                    <p>{String(translations[language].dates[sign.id])}</p>
                </div>
            ))}
        </div>
    );
};

export default ZodiacBlock;
